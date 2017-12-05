import React from 'react';
import {Row, Col} from 'react-bootstrap';
import moment from 'moment';

function LeaseDetails({ lease, ...props }) {
    return (
        <div>
            <Row>
                <Col xs={3} md={3}>
                    <h3>Status</h3>
                    <h4>{lease.status}</h4>
                </Col>
                <Col xs={3} md={3}>
                    <h3>Order ID</h3>
                    <h4>{lease.orderId}</h4>
                </Col>
                <Col xs={3} md={3}>
                    <h3>Down Payment</h3>
                    <h4>${lease._downPaymentAmount.toFixed(2)}</h4>
                </Col>
                <Col xs={3} md={3}>
                    <h3>Lease Payment</h3>
                    <h4>${lease._totalRecurringAmount.toFixed(2)}</h4>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col xs={3} md={3}>
                    <h3>Next Billing Date</h3>
                    <h4>{moment(lease.nextBillingDate).format('LL')}</h4>
                </Col>
                <Col xs={3} md={3}>
                    <h3>Next Billing Due</h3>
                    <h4>${lease._monthlyPayment.toFixed(2)}</h4>
                </Col>
                <Col xs={3} md={3}>
                    <h3>Total Paid</h3>
                    <h4>${lease._totalPaid.toFixed(2)}</h4>
                </Col>
                <Col xs={3} md={3}>
                    <h3>Remaining Balance</h3>
                    <h4>${lease._remainingBalance.toFixed(2)} </h4>
                </Col>
            </Row>
        </div>
    );
}

export default LeaseDetails;