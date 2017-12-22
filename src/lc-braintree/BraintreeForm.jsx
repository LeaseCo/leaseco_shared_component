import React from 'react';
import { Form } from 'react-bootstrap';
import braintree from 'braintree-web';
import AddressForm from './AddressForm';

const STYLES = {
    'input': {
        'font-size': '14px',
        'font-family': 'helvetica, tahoma, calibri, sans-serif',
        'color': '#3a3a3a'
    },
    ':focus': {
        'color': 'black'
    }
};

function getBraintreeError(error) {
    const code = error.code;
    if (code === "HOSTED_FIELDS_FIELDS_EMPTY") {
        return 'All fields are empty! Please fill out the form.';
    }

    if (code === "HOSTED_FIELDS_FIELDS_INVALID") {
        const invalidFieldMap = {
            'number': 'Credit Card Number',
            'cvv': 'CVV2',
            'expirationMonth': 'Expiration Month',
            'expirationYear': 'Expiration Year'
        };
        const invalidFieldNames = error.details.invalidFieldKeys.reduce(function(nameArr, item){
            const val = invalidFieldMap[item] ? invalidFieldMap[item] : item;
            nameArr.push(val);
            return nameArr;
        }, []).join(', ');
        return 'The following fields are invalid: ' + invalidFieldNames;
    }

    if (code === 'HOSTED_FIELDS_FAILED_TOKENIZATION') {
        return 'Please re-check whether the card is valid.';
    }

    if (code === 'HOSTED_FIELDS_TOKENIZATION_NETWORK_ERROR') {
        return 'A network error occurred when submitting your payment ' +
        'information, please try again.';
    }

    return "";
}

const FIELDS = {
    number: {
        selector: '#card-number',
        placeholder: '4111 1111 1111 1111'
    },
    cvv: {
        selector: '#cvv',
        placeholder: '123'
    },
    expirationMonth: {
        selector: '#expiration-month',
        placeholder: 'MM'
    },
    expirationYear: {
        selector: '#expiration-year',
        placeholder: 'YY'
    },
    postalCode: {
        selector: '#postal-code',
        placeholder: '90210'
    }
};

class BraintreeForm extends React.Component {
    constructor(props) {
        super(props);
        this.formStyles = props.formStyles || STYLES;
        this.formFields = props.formFields || FIELDS;
        this.hostedFieldsInstance = null;
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        console.log(props.errorMessage, 'props');
        this.state = {
            formDisabled: true,
            billingAddress: {
                firstName: '',
                lastName: '',
                postalCode: '',
                region: '',
                locality: '',
                streetAddress: '',
                extendedAddress: '',
                countryName: 'US'
            },
            showAddress: props.showAddress,
            errorMessage: props.errorMessage
        };

    }
    componentWillReceiveProps(props) {
        console.log('new props', props);
        this.setState(prevState => {
            return {
                errorMessage: props.errorMessage
            }
        })
    }
    componentDidMount() {
        this.initBraintreeForm();
    }

    async initBraintreeForm(){
        try{
            const clientToken = await this.props.getClientToken();
            const clientInstance = await braintree.client.create({authorization: clientToken});
            this.hostedFieldsInstance = await braintree.hostedFields.create({
                client: clientInstance,
                styles: this.formStyles,
                fields: this.formFields
            });
        }catch(err){
            console.log(err);
        }
    }

    handleChange(event){
        const newValue = event.target.value;
        const key = event.target.name;
        this.setState(prevState => {
            const billingAddress = {...prevState.billingAddress};
            billingAddress[key] = newValue;
            return {
                billingAddress
            }
        });
    }

    async onSubmit(e){
        e.preventDefault();
        try {
            if (this.props.tokenSubmit) {
                this.props.onSubmit('', this.state.billingAddress);
            } else {
                const { nonce } = await this.hostedFieldsInstance.tokenize();
                this.props.onSubmit(nonce, this.state.billingAddress);
            }
        } catch(e) {
            const errorMessage = getBraintreeError(e);
            this.setState(prevState => {
                return {
                    errorMessage
                }
            });
            console.log(e.message, e.code);
        }

    }

    render(){
        console.log(this.state.errorMessage);
        console.log(this.props.errorMessage);
        if (!this.state.showAddress) {
            return (
                <Form onSubmit={this.onSubmit}>
                    {this.props.children}
                    <div> asdfasdf {this.state.errorMessage} </div>
                </Form>
            )
        }
        return (

            <Form onSubmit={this.onSubmit}>
                <AddressForm billingAddress={this.state.billingAddress} handleChange={this.handleChange}/>
                {this.props.children}
                <div> asdfasf {this.state.errorMessage} </div>
            </Form>
        )
    }
}


export default BraintreeForm