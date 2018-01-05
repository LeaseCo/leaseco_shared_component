import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import MaskedInput from 'react-text-mask';

function FormField({ handleSelectChange, handleSelectBlur, handleFormBlur, validationChange, validationFunction, validationState, handleFormChange, handleBlur, id, label, help,  error, ...props }) {

    return (
        <FormGroup controlId={id} validationState={validationState}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl  {...props}  onChange={handleFormChange} onBlur={handleBlur}/>
            {help && <HelpBlock>{help}</HelpBlock>}
            {validationState === "error" && <HelpBlock>{error}</HelpBlock>}
        </FormGroup>
    );
}

export default FormField;