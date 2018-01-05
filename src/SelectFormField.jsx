import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import Select from 'react-select';
import STATES from './lc-braintree/select/states';
import 'leaseco_shared_component/src/lc-braintree/select/react-select.css';

function SelectFormField({ validationChange, validationFunction, handleSelectFormChange, handleSelectBlur, validationState, handleBlur, id, label, help,  error, ...props }) {
    return (
        <FormGroup controlId={id} validationState={validationState}>
            <Select {...props} options={STATES} onChange={handleSelectFormChange} onBlur={handleSelectBlur}/>
            {help && <HelpBlock>{help}</HelpBlock>}
            {validationState === "error" && <HelpBlock>{error}</HelpBlock>}
        </FormGroup>
    );
}

export default SelectFormField;