import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import FormField from './FormField';
import MaskedFormField from "./MaskedFormField";
const VALIDATION_MAP = {
    ERROR: "error",
    SUCCESS: "success"
}

class FieldGroup extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            isPristine: true,
        };

        this.handleBlur = this.handleBlur.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.validateValue = this.validateValue.bind(this);
    }
    validateValue(event) {
        console.log(this.props.validationFunction, event.target.value, this.props.validationFunction(event.target.value));
        if (!this.props.validationFunction(event.target.value)) {
            this.props.validationChange(event.target.name, VALIDATION_MAP.ERROR);
            return;
        }
        this.props.validationChange(event.target.name, VALIDATION_MAP.SUCCESS);
    }
    handleFormChange(event) {
        console.log("event");
        this.props.onChange(event);
        if (!this.state.isPristine) {
            this.validateValue(event);
        }
    }

    handleBlur(event) {
        if (this.state.isPristine) {
            this.setState(prevState => {
                return {
                    isPristine: false
                }
            });
            this.validateValue(event);
        }
    }

    render() {
        const fieldProps = {
            handleFormChange: this.handleFormChange,
            handleBlur: this.handleBlur,
            ...this.props
        }
        if (this.props.mask) {
            return (
                <MaskedFormField {...fieldProps} />
            )
        }

        return (
            <FormField {...fieldProps} />
        );
    }
}

export default FieldGroup;