import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';

function MaskedFormField({ maskPattern, handleFormChange, validationState, handleBlur, id, label, help,  error, ...props }) {
    return (
        <FormGroup controlId={id} validationState={validationState}>
            <ControlLabel>{label}</ControlLabel>
            <MaskedInput {...props} showMask={true} mask={maskPattern} onChange={handleFormChange} onBlur={handleBlur} />
             {help && <HelpBlock>{help}</HelpBlock>}
             {validationState === "error" && <HelpBlock>{error}</HelpBlock>}
        </FormGroup>
    );
}

export default MaskedFormField;