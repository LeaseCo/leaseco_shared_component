import React from 'react';
import {Row, Col} from 'react-bootstrap';
import LeaseItemTable from './LeaseItemTable';
import LeaseTotalTable from './LeaseTotalTable';

function LeaseOrders({ orders, lease, ...props }) {
    return (
        <div>
            <Row>
                <Col xs={12} md={12}>
                    <h3>Order Details</h3>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col xs={12} md={12}>
                    <LeaseItemTable orders={orders}/>
                </Col>
            </Row>
            <Row>
                <Col xs={4} xsOffset={8}>
                    <LeaseTotalTable lease={lease}/>
                </Col>
            </Row>
        </div>
    );
}

export default LeaseOrders;