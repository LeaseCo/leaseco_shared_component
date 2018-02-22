import React from 'react';
import { Table } from 'react-bootstrap';

function LeaseTotalTable({ lease, ...props }) {
    return (
        <Table condensed style={{align:"right"}}>
            <thead>
                <tr></tr>
            </thead>
            <tbody>
                <tr>
                    <td>Subtotal<sub>(discount included)</sub></td>
                    <td>${lease.orderAmount.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Shipping & Handling</td>
                    <td>${lease.shippingAmount.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Tax</td>
                    <td>${(lease.taxRate * lease.orderAmount).toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Cost of Rental</td>
                    <td>${lease._costOfRental.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Down Payment</td>
                    <td>-${lease._downPaymentAmount.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Lease Payment</td>
                    <td>${lease._totalRecurringAmount.toFixed(2)}</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default LeaseTotalTable;
