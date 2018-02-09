import React from 'react';
import {Row, Col} from 'react-bootstrap';
import moment from 'moment';
import './lease.css';

function LeaseDetails({ lease, ...props }) {
    const isActive = lease._isActive;
    let date = 'N/A';
    if (lease.nextBillingDate) {
        date = moment(lease.nextBillingDate).format('LL');
    }

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
                    <h4>{isActive ? date : 'N/A'}</h4>
                </Col>
                <Col xs={3} md={3}>
                    <h3>Next Billing Due</h3>
                    <h4>{isActive ? '$' + lease._monthlyPayment.toFixed(2) : 'N/A'}</h4>
                </Col>
                <Col xs={3} md={3}>
                    <h3>Total Paid</h3>
                    <h4>${lease.totalPaid.toFixed(2)}</h4>
                </Col>
                <Col xs={3} md={3}>
                    <h3>Remaining Balance</h3>
                    <h4>{isActive ? '$' + lease._remainingBalance.toFixed(2) : 'N/A'} </h4>
                </Col>
            </Row>
        </div>
    );
}

export default LeaseDetails;