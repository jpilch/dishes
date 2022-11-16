import { Field, reduxForm } from 'redux-form';

import v from "./field-validators";
import c from "./field-components";

let Form = (props) => {
    const {
        handleSubmit,
        pristine,
        reset,
        submitting,
    } = props;

    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="name"
                type="text"
                component={c.renderInputField}
                label="Dish name"
                validate={v.required}
            />
            <Field
                name="preparation_time"
                type="text"
                component={c.renderInputField}
                label="Preparation time"
                validate={[v.required, v.inTimeFormat]}
            />
            <Field
                name="type"
                component={c.renderSelectField}
                label="Dish type"
                validate={v.required}
            />
            <div>
                <button
                    type="submit"
                    disabled={pristine || submitting}
                >
                    Submit
                </button>
                <button
                    type="button"
                    disabled={pristine || submitting}
                    onClick={reset}
                >
                    Reset
                </button>
            </div>
        </form >
    )
}

Form = reduxForm({
    form: 'Form'
})(Form);


export default Form;