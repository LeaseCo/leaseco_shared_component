import React from 'react';
import moment from 'moment';
const LEASE_EVENT_TYPES = {
    EARLY_PAYOFF: 'Early Payoff',
    CHANGE_TOKEN: 'Change Token',
    REQUEST_CANCEL: 'Request Cancel',
    CANCEL: 'Cancellation',
    AUTHORIZE: 'Authorization',
    CAPTURE: 'Capture',
    REFUND: 'Refund'
};

function retrieveDescription(event) {
    const { eventInfo, type } = event;

    if (type === LEASE_EVENT_TYPES.EARLY_PAYOFF) {
        const { amount } = eventInfo;
        return `User paid $${amount} to payoff the rest of this lease.`;
    }

    if (type === LEASE_EVENT_TYPES.CHANGE_TOKEN) {
        const { previousToken, newToken } = eventInfo;
        return `User changed this lease's token from the old token ${previousToken} to this new token ${newToken}.`
    }

    if (type === LEASE_EVENT_TYPES.REQUEST_CANCEL) {
        return `User has requested to cancel this lease.`
    }

    if (type === LEASE_EVENT_TYPES.CANCEL) {
        return `Lease has been canceled.`
    }
    if (type === LEASE_EVENT_TYPES.AUTHORIZE) {
        const { amount } = eventInfo;
        return `$${amount} has been authorized for this lease.`;
    }
    if (type === LEASE_EVENT_TYPES.CAPTURE) {
        const { amount } = eventInfo;
        return `$${amount} has been captured for this lease.`;
    }
    if (type === LEASE_EVENT_TYPES.REFUND) {
        const { refundAmount } = eventInfo;
        return `$${refundAmount} has been refunded back to the user`;
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