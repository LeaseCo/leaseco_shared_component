import React from 'react';
import {Row, Col} from 'react-bootstrap';

function PaymentMethodDetails({ paymentMethod, ...props }) {
    return (
        <div>
            <h3>Payment Method</h3>
            <hr />
            <h4>{paymentMethod.maskedNumber}</h4>
            <h4>Expiration Date: {paymentMethod.expirationDate}</h4>
            <h4>Card Type: {paymentMethod.cardType}</h4>
        </div>
    );
}

export default PaymentMethodDetails;