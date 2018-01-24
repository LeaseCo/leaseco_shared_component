import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import MaskedInput from 'react-text-mask';
function MaskedFormField({ stylingClass, handleSelectBlur, handleSelectFormChange, handleFormBlur, validationChange, validationFunction, mask, handleFormChange, validationState, handleBlur, id, label, help,  error, ...props }) {
    const inputClass = stylingClass ? stylingClass : 'form-control';
    return (
        <FormGroup controlId={id} validationState={validationState}>
            <ControlLabel>{label}</ControlLabel>
            <MaskedInput className={inputClass} {...props}  showMask={true} mask={mask} onChange={handleFormChange} onBlur={handleBlur} />
            {help && <HelpBlock>{help}</HelpBlock>}
            {validationState === "error" && <HelpBlock>{error}</HelpBlock>}
        </FormGroup>
    );
}

export default MaskedFormField;