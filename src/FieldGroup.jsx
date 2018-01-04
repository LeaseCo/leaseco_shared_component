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
        const {validationFunction, validationChange, ...formProps} = this.props;

        this.state = {
            isPristine: true,
            formProps
        };

        this.formProps = formProps;
        this.validationFunction = validationFunction;
        this.validationChange = validationChange;
        console.log(props, this.validationChange);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.validateValue = this.validateValue.bind(this);
    }
    validateValue(event) {
        console.log("HERE", event.value);
        if (!this.validationFunction(event.value)) {
            this.validationChange(event.target.name, VALIDATION_MAP.ERROR);
            return;
        }
        this.validationChange(event.target.name, VALIDATION_MAP.ERROR);
    }
    handleFormChange(event) {
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
        console.log(this.state.formProps, 'why is this so hard');
        const {validationFunction, validationChange, ...formProps} = this.props;
        const fieldProps = {
            handleBlur: this.handleBlur,
            handleFormChange: this.handleFormChange,
            formProps
        };
        if (this.formProps.mask) {
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