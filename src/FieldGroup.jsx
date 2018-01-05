import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import FormField from './FormField';
import SelectFormField from './SelectFormField';
import MaskedFormField from "./MaskedFormField";
const VALIDATION_MAP = {
    ERROR: "error",
    SUCCESS: "success"
}

class FieldGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isPristine: true,
            errorMessage: ''
        };
        this.validationFunction = this.props.validationFunction || null;
        if (this.validationFunction) {
            this.validationFunction = this.validationFunction.bind(this);
        }
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.validateValue = this.validateValue.bind(this);
        this.handleSelectFormChange = this.handleSelectFormChange.bind(this);
        this.handleSelectBlur = this.handleSelectBlur.bind(this);
    }
    validateValue(event) {
        if (!this.validationFunction) {
            return '';
        };

        const validationResult = this.validationFunction(event.target.value);
        if (validationResult !== '') {
            this.props.validationChange(event.target.name, VALIDATION_MAP.ERROR);
            this.setState(prevState => {
                return {
                    errorMessage: validationResult
                }
            });
            return;
        }
        this.props.validationChange(event.target.name, VALIDATION_MAP.SUCCESS);
        this.setState(prevState => {
            return {
                errorMessage: validationResult
            }
        });
    }
    handleFormChange(event) {
        this.props.onChange(event);
        if (!this.state.isPristine) {
            this.validateValue(event);
        }
    }
    handleSelectFormChange(value) {
        const event = {
            target: {
                value,
                name: "region"
            }
        }
        this.handleFormChange(event);
    }
    handleSelectBlur(value) {
        const event = {
            target: {
                value: this.props.value,
                name: "region"
            }
        };
        if (this.state.isPristine) {
            this.setState(prevState => {
                return {
                    isPristine: false
                }
            });
        }
        this.validateValue(event);
    }
    handleBlur(event) {
        if (this.state.isPristine) {
            this.setState(prevState => {
                return {
                    isPristine: false
                }
            });
        }
        this.validateValue(event);
    }

    render() {
        const fieldProps = {
            handleFormChange: this.handleFormChange,
            handleSelectFormChange: this.handleSelectFormChange,
            handleBlur: this.handleBlur,
            handleSelectBlur: this.handleSelectBlur,
            error: this.state.errorMessage,
            ...this.props
        };
        if (this.props.mask) {
            return (
                <MaskedFormField {...fieldProps} />
            )
        }
        if (this.props.options) {

            return (
                <SelectFormField {...fieldProps} />
            )
        }
        return (
            <FormField {...fieldProps} />
        );
    }
}

export default FieldGroup;