import React from 'react';
import { Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import PropTypes from 'prop-types';
import EventRow from './EventRow';

class EventsList extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        let tableRows = this.props.events.map((event)=>{
            return (
                <EventRow event={event} />
            )
        });

        return (
            <Table responsive striped bordered condensed hover>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Event</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                {tableRows}
                </tbody>
            </Table>
        )
    }
}

EventsList.propTypes = {
    leases: PropTypes.arrayOf(PropTypes.shape({
        customer_id: PropTypes.number,
        id: PropTypes.string,
        annualInterestRate: PropTypes.number,
        numberOfBilingCycles: PropTypes.number,
        orderAmount: PropTypes.number,
        orderId: PropTypes.string,
        remainingMonths: PropTypes.number,
        status: PropTypes.string,
        _remainingBalance: PropTypes.number,
        updated_at: PropTypes.string,
        btStatus: PropTypes.string,
        pastDueBalance: PropTypes.number,
        paidThroughDate: PropTypes.string,
        nextBillingDate: PropTypes.string,
        failureCount: PropTypes.number,
        daysPastDue: PropTypes.string
    })),
    customerId: PropTypes.string
};
export default EventsList;