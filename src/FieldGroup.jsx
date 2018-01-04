import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
const VALIDATION_MAP = {
    ERROR: "error",
    SUCCESS: "success"
}
class FieldGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isPristine: true
        };

        this.fieldProps = {
            maskPattern: props.maskPattern,
            validationState: props.validationState
        };

        this.handleBlur = this.handleBlur.bind(this);
    }

    handleFormChange(event) {
        this.props.onChange(event);
        if (!this.state.isPristine) {
            this.props.onValidationChange(event);
        }
    }

    handleBlur(event) {
        if (this.state.isPristine) {
            this.setState(prevState => {
                return {
                    isPristine: false
                }
            })
        }
        this.props.onValidationChange(event);
    }

    render() {

        const formProps = {
            maskPattern: this.props.maskPattern,
            validationState: this.props.validationState,
            handleFormChange: this.handleFormChange,
            ...props
        };

        if (formProps.maskPattern) {
            return (
                <MaskedFormField {...formProps} />
            )
        }

        return (
            <FormField {...formProps} />
        );
    }
}

export default FieldGroup;