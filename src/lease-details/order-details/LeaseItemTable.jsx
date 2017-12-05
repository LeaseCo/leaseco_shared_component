import React from 'react';
import {Table} from 'react-bootstrap';
import LeaseItem from './LeaseItem';

function LeaseItemTable({ orders, ...props }) {
    const listItems = orders.map((order, index) => {
        return <LeaseItem key={index} order={order} />
    });

    return (
        <Table responsive striped bordered condensed hover>
            <thead>
            <tr>
                <th></th>
                <th>SKU</th>
                <th>Item</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total Price</th>
            </tr>
            </thead>
            <tbody>
                {listItems}
            </tbody>
        </Table>
    )
}


export default LeaseItemTable;