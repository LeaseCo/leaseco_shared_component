import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
function SelectFormField({ handleFormChange, validationState, handleBlur, id, label, help,  error, ...props }) {
    return (
        <FormGroup controlId={id} validationState={validationState}>
            <ControlLabel>{label}</ControlLabel>
            <Select {...props} onChange={handleFormChange} onBlur={handleBlur}/>
            {help && <HelpBlock>{help}</HelpBlock>}
            {validationState === "error" && <HelpBlock>{error}</HelpBlock>}
        </FormGroup>
    );
}

export default SelectFormField;