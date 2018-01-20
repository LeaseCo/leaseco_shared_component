import React from 'react';
import moment from 'moment';
const TRANSACTION_STATUS_TYPES = {
    SUBMITTED_FOR_SETTLEMENT: 'submitted_for_settlement',
    AUTHORIZED: 'authorized',
    SETTLEMENT_PENDING: 'settlement_pending',
    SETTLING: 'settling',
    SETTLED: 'settled',
    PROCESSOR_DECLINED: 'processor_declined',
    GATEWAY_REJECTED: 'gateway_rejected',
    FAILED: 'failed',
    SETTLEMENT_DECLINED: 'settlement_declined',
    AUTHORIZATION_EXPIRED: 'authorization_expired',
    VOIDED: 'voided'
};

function retrieveDescription(status) {

    if (status === TRANSACTION_STATUS_TYPES.SUBMITTED_FOR_SETTLEMENT ||
        status === TRANSACTION_STATUS_TYPES.AUTHORIZED ||
        status === TRANSACTION_STATUS_TYPES.SETTLEMENT_PENDING ||
        status === TRANSACTION_STATUS_TYPES.SETTLING ||
        status === TRANSACTION_STATUS_TYPES.SETTLED
    ) {
        return 'Success';
    }

    return 'Failure';
};


function LeasePaymentTableRow({ transaction, ...props }) {
    const date = moment(transaction.createdAt).format('LL');

    return (
        <tr>
            <td>{date}</td>
            <td>{retrieveDescription(transaction.status)}</td>
            <td>${transaction.amount}</td>
            <td>{transaction.id}</td>
            <td>{transaction.type}</td>
        </tr>
    );
}

export default LeasePaymentTableRow;
