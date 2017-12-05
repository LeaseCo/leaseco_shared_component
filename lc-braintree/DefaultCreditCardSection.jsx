import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

class DefaultCreditCardSection extends React.Component {
    render(){
        return (
            <Grid>
                <Row>
                    <Col sm={8}>
                        <div className="form-group">
                            <label className="control-label">Card Number</label>
                            <div className="form-control" id="card-number" />
                            <span className="helper-text" />
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="row">
                            <label className="control-label col-xs-12">Expiration Date</label>
                            <div className="col-xs-6">
                                <div className="form-control" id="expiration-month" />
                            </div>
                            <div className="col-xs-6">
                                <div className="form-control" id="expiration-year" />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>

                        <div className="form-group">
                            <label className="control-label">Security Code</label>
                            <div className="form-control" id="cvv" />
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="form-group">
                            <label className="control-label">Zipcode</label>
                            <div className="form-control" id="postal-code" />
                        </div>
                   </Col>
                </Row>
            </Grid>
        )
    }
}


export default DefaultCreditCardSection