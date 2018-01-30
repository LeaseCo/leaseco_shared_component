import React from 'react';
import {Table} from 'react-bootstrap';
import EarlyPayoffRow from './EarlyPayoffRow';

function EarlyPayoffTable({ earlyPayoffData, ...props }) {
    const payoffRows = earlyPayoffData.map((payoffMonth, index) => {
        return <EarlyPayoffRow key={index} billingCycle={index} payoffMonth={payoffMonth} />
    });

    return (
        <Table responsive striped bordered condensed hover>
            <thead>
            <tr>
                <th>Billing Cycle </th>
                <th>Total Payment Including Tax</th>
            </tr>
            </thead>
            <tbody>
            {payoffRows}
            </tbody>

        </Table>
    )
}


export default EarlyPayoffTable;