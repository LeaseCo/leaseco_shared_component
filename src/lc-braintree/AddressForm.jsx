import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import FieldGroup from '../FieldGroup';

function AddressForm({ handleChange, billingAddress, ...props }) {
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
                <Col xs={2} sm={2} md={2}>
                    <FieldGroup
                        id="region"
                        type="text"
                        name="region"
                        placeholder="State"
                        value={billingAddress.region}
                        error="This field is required."
                        onChange={handleChange}
                        required
                    />
                </Col>
                <Col xs={2} sm={2} md={2}>
                    <FieldGroup
                        id="countryName"
                        type="text"
                        name="countryName"
                        placeholder="region"
                        value={billingAddress.countryName}
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

