import React from 'react';
import { Form, Alert } from 'react-bootstrap';
import braintree from 'braintree-web';
import AddressForm from './AddressForm';
import NotificationSystem from 'react-notification-system';
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
        return 'Please fill out your credit card information.';
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

        this._notificationSystem = null;
        const billingAddress = this.getAddress(props);
        this.state = {
            formDisabled: true,
            billingAddress,
            showAddress: props.showAddress,
            errorMessage: props.errorMessage
        };
        this.getAddress = this.getAddress.bind(this);
    }
    componentDidUpdate(props) {
        if (props.errorMessage === ''){
            return;
        }
        this._notificationSystem.addNotification({
            message: props.errorMessage,
            level: 'error',
            position: 'bc'
        });
    }
    componentDidMount() {
        this.initBraintreeForm();
        this._notificationSystem = this.refs.notificationSystem;

    }
    getAddress(props) {
        const address = props.address || {};
        const billingAddress = {
            firstName: address.firstName || '',
            lastName: address.lastName || '',
            postalCode: address.postalCode || '',
            region: address.region || '',
            locality: address.locality || '',
            streetAddress: address.streetAddress || '',
            extendedAddress: address.extendedAddress || '',
            countryCodeAlpha2: 'US'
        };

        return billingAddress;
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
            const { nonce } = await this.hostedFieldsInstance.tokenize();
            this.props.onSubmit(nonce, this.state.billingAddress);
        } catch(e) {
            this._notificationSystem.addNotification({
                message: getBraintreeError(e),
                level: 'error',
                position: 'bc'
            });
        }

    }

    render(){
        if (!this.state.showAddress) {
            return (
                <Form onSubmit={this.onSubmit}>
                    <h4> Billing Address </h4>
                    <NotificationSystem ref="notificationSystem" />
                    {this.props.children}
                </Form>
            )
        }

        return (
            <Form onSubmit={this.onSubmit}>
                <h4> Billing Address </h4>
                <NotificationSystem ref="notificationSystem" />
                <AddressForm billingAddress={this.state.billingAddress} handleChange={this.handleChange}/>
                {this.props.children}
            </Form>
        )
    }
}


export default BraintreeForm