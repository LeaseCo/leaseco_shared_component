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
            showAddress: props.showAddress
        };

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
        if (this.props.tokenSubmit) {
            this.props.onSubmit('', this.state.billingAddress);
        } else {
            const { nonce } = await this.hostedFieldsInstance.tokenize();
            this.props.onSubmit(nonce, this.state.billingAddress);
        }
    }

    render(){
        if (!this.state.showAddress) {
            return (
                <Form onSubmit={this.onSubmit}>
                    {this.props.children}
                </Form>
            )
        }
        return (

            <Form onSubmit={this.onSubmit}>
                <AddressForm billingAddress={this.state.billingAddress} handleChange={this.handleChange}/>
                {this.props.children}
            </Form>
        )
    }
}


export default BraintreeForm