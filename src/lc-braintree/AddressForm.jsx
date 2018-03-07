import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import FieldGroup from '../FieldGroup';
import Select from 'react-select';
import STATES from './select/states';
import 'leaseco_shared_component/src/lc-braintree/select/react-select.css';

function AddressForm({ handleChange, billingAddress, ...props }) {
    function selectOnChangeHandler(state) {
        const event = {
            target : {
                value : state,
                name : 'region'
            }
        };
        handleChange(event);
    }
    return (
        <div>
            <Row>
                <Col xs={6} sm={6} md={6}>
                    <FieldGroup
                        id="firstName"
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={billingAddress.firstName}
                        error="This field is required."
                        onChange={handleChange}
                        required
                    />
                </Col>
                <Col xs={6} sm={6} md={6}>
                    <FieldGroup
                        id="lastName"
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={billingAddress.lastName}
                        error="This field is required."
                        onChange={handleChange}
                        required
                    />
                </Col>
            </Row>

            <Row>
                <Col xs={6} sm={6} md={6}>
                    <FieldGroup
                        id="streetAddress"
                        type="text"
                        name="streetAddress"
                        placeholder="Address"
                        value={billingAddress.streetAddress}
                        error="This field is required."
                        onChange={handleChange}
                        required
                    />
                </Col>
                <Col xs={2} sm={2} md={2}>
                    <FieldGroup
                        id="extendedAddress"
                        type="text"
                        name="extendedAddress"
                        value={billingAddress.extendedAddress}
                        placeholder="Unit #"
                        onChange={handleChange}

                    />
                </Col>
                <Col xs={4} sm={4} md={4}>
                    <FieldGroup
                        id="postalCode"
                        type="number"
                        name="postalCode"
                        placeholder="Zip Code"
                        value={billingAddress.postalCode}
                        error="This field is required."
                        onChange={handleChange}
                        required
                    />
                </Col>
            </Row>
            <Row>
                <Col xs={6} sm={6} md={6}>
                    <FieldGroup
                        id="locality"
                        type="text"
                        name="locality"
                        placeholder="City"
                        value={billingAddress.locality}
                        error="This field is required."
                        onChange={handleChange}
                        required
                    />
                </Col>
                <Col xs={4} sm={4} md={4}>
                    <Select
                        id="region"
                        options={STATES}
                        simpleValue
                        clearable={false}
                        name="region"
                        value={billingAddress.region}
                        onChange={selectOnChangeHandler}
                        openOnClick={false}
                        searchable={true}
                        required
                    />
                </Col>
                <Col xs={2} sm={2} md={2}>
                    <FieldGroup
                        id="countryName"
                        type="text"
                        name="countryName"
                        placeholder="region"
                        value={billingAddress.countryCodeAlpha2}
                        error="This field is required."
                        onChange={handleChange}
                        disabled
                    />
                </Col>
            </Row>
        </div>
    )
}

export default AddressForm;

