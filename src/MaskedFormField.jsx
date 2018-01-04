import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import MaskedInput from 'react-text-mask';
function MaskedFormField({ mask, handleFormChange, validationState, handleBlur, id, label, help,  error, ...props }) {
    const maskPhonePattern = ['+', '1', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    return (
        <FormGroup controlId={id} validationState={validationState}>
            <ControlLabel>{label}</ControlLabel>
            <MaskedInput className={"form-control"}{...props}  showMask={true} mask={maskPhonePattern} onChange={handleFormChange} onBlur={handleBlur} />
            {help && <HelpBlock>{help}</HelpBlock>}
            {validationState === "error" && <HelpBlock>{error}</HelpBlock>}
        </FormGroup>
    );
}

export default MaskedFormField;