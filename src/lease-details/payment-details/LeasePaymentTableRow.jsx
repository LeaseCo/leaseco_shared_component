import React from 'react';
import moment from 'moment';

function LeasePaymentTableRow({ transaction, ...props }) {
    const date = moment(transaction.createdAt).format('LL');

    return (
        <tr>
            <td>{date}</td>
            <td>{transaction.status}</td>
            <td>${transaction.amount}</td>
            <td>{transaction.id}</td>
            <td>{transaction.type}</td>
        </tr>
    );
}

export default LeasePaymentTableRow;
