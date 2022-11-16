import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from "react-redux";

import v from "./field-validators";
import c from "./field-components";
import dishFields from "./dish-fields";

import styles from "../../styles/Form.module.scss";


function Form(props) {
    const {
        handleSubmit,
        pristine,
        reset,
        submitting,
        type
    } = props;

    return (
        <form
            className={styles.form}
            onSubmit={e => {
                e.preventDefault();
                handleSubmit();
            }}
        >
            <h2 className={styles.form__heading}>Create your recipe</h2>
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
            {type && dishFields.get(type)}
            <div className={styles.form__buttons}>
                <button
                    className={styles.form__button}
                    type="submit"
                    disabled={pristine || submitting}
                >
                    Submit
                </button>
                <button
                    className={styles.form__button}
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

const selector = formValueSelector("Form");
Form = connect((state) => {
    const type = selector(state, "type");

    return { type };
})(Form);

export default Form;