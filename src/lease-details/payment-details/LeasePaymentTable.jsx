import React from 'react';
import { Table } from 'react-bootstrap';
import LeasePaymentTableRow from './LeasePaymentTableRow';

function LeasePaymentsTable({ transactions, ...props }) {
    const listItems = transactions.map((transaction, index) => {
        return <LeasePaymentTableRow key={index} transaction={transaction} />
    });

    return (
        <Table responsive striped bordered condensed hover>
            <thead>
            <tr>
                <th>Date</th>
                <th>Status</th>
                <th>Amount</th>
                <th>Transaction ID</th>
                <th>Type</th>
            </tr>
            </thead>
            <tbody>
                {listItems}
            </tbody>
        </Table>
    );
}
export default LeasePaymentsTable;