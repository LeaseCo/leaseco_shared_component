import React from 'react';
import moment from 'moment';
const LEASE_EVENT_TYPES = {
    EARLY_PAYOFF: 'Early Payoff',
    CHANGE_TOKEN: 'Change Payment Method',
    REQUEST_CANCEL: 'Request Cancel',
    CANCEL: 'Cancellation',
    AUTHORIZE: 'Authorization',
    CAPTURE: 'Capture',
    REFUND: 'Refund',
    VOID: 'Void',
    AGREEMENT: 'Signed Agreement',
};

function retrieveDescription(event) {
    const { eventInfo, type } = event;

    if (type === LEASE_EVENT_TYPES.EARLY_PAYOFF) {
        const { amount } = eventInfo;
        return `User paid $${amount} to payoff the rest of this lease.`;
    }

    if (type === LEASE_EVENT_TYPES.VOID) {
        const { amount } = eventInfo;
        return `This lease has been voided.`;
    }

    if (type === LEASE_EVENT_TYPES.CHANGE_TOKEN) {
        return `Payment method has been updated.`
    }

    if (type === LEASE_EVENT_TYPES.REQUEST_CANCEL) {
        return `User has requested to cancel this lease.`
    }

    if (type === LEASE_EVENT_TYPES.CANCEL) {
        return `This lease has been canceled.`
    }
    if (type === LEASE_EVENT_TYPES.AUTHORIZE) {
        const { amount } = eventInfo;
        return `This lease has been authorized.`;
    }
    if (type === LEASE_EVENT_TYPES.CAPTURE) {
        const { amount } = eventInfo;
        return `This lease has been captured.`;
    }
    if (type === LEASE_EVENT_TYPES.REFUND) {
        const { refundAmount } = eventInfo;
        return `$${refundAmount} has been refunded back to the user.`;
    }
    if (type === LEASE_EVENT_TYPES.AGREEMENT) {
        return `The lease agreement was signed.`;
    }
};

function EventRow({ event, ...props }) {
    const { eventInfo, type } = event;

    return (
        <tr>
            <td>{moment(eventInfo.createdAt).format('LL')}</td>
            <td>{type}</td>
            <td>{retrieveDescription(event)}</td>
        </tr>
    )
}


export default EventRow;