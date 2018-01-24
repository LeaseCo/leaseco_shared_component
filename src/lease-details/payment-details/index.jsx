import React from 'react';
import {Row, Col} from 'react-bootstrap';
import LeasePaymentTable from './LeasePaymentTable';
import PaymentMethodDetails from './PaymentMethodDetails';

function LeasePayments({ paymentMethod, transactions, ...props }) {
    return (
        <div>
            <Row>
                <Col xs={12} sm={4}>
                    <PaymentMethodDetails paymentMethod={paymentMethod}/>
                </Col>
                <Col xs={12} sm={8}>
                    <h3>Payments Made</h3>
                    <LeasePaymentTable transactions={transactions} />
                </Col>
            </Row>
        </div>
    )
}

export default LeasePayments;