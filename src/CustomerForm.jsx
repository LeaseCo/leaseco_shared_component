import React from 'react';
import { Form, Button } from 'react-bootstrap';
import FieldGroup from './FieldGroup';
import AddressForm from './lc-braintree/AddressForm';

function CustomerForm({ customer, submit, handleChange, status,...props }) {
    return (
        <Form onSubmit={submit}>
            <AddressForm billingAddress={customer} handleChange={handleChange}/>
            <FieldGroup
                id="email"
                type="email"
                label="Email address"
                value={customer.email}
                name="email"
                onChange={handleChange}
            />
            <FieldGroup
                id="phone"
                label="Phone"
                type="tel"
                value={customer.phone}
                name="phone"
                onChange={handleChange}
            />
            <FieldGroup
                id="dob"
                label="Date of Birth"
                type="date"
                value={customer.dob}
                name="dob"
                onChange={handleChange}
            />
            <FieldGroup
                id="income"
                label="Income"
                type="number"
                value={customer.income}
                name="income"
                onChange={handleChange}
            />
            <FieldGroup
                id="ssn"
                label="SSN"
                type="text"
                placeholder="Enter SSN"
                value={customer.ssn}
                name="ssn"
                onChange={handleChange}
            />
            <Button
                bsStyle="primary"
                type="submit"
                disabled={status}
            >
                {status ? 'Submitting...' : 'Submit'}
            </Button>
        </Form>
    );
}

export default CustomerForm;