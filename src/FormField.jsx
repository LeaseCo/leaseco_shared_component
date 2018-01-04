import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';

function FormField({ validationState, handleFormChange, handleBlur, id, label, help,  error, ...props }) {
    console.log(handleFormChange);
    return (
        <FormGroup controlId={id} validationState={validationState}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl onChange={handleFormChange} onBlur={handleBlur} {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
            {validationState === "error" && <HelpBlock>{error}</HelpBlock>}
        </FormGroup>
    );
}

export default FormField;