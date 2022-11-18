import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect, useDispatch } from "react-redux";

import v from "./field-validators";
import c from "./field-components";
import dishFields from "./dish-fields";

import styles from "../../styles/Form.module.scss";


let Form = (props) => {
    const {
        handleSubmit,
        pristine,
        reset,
        submitting,
        type,
        handleTypeChange
    } = props;

    const dispatch = useDispatch();

    return (
        <form
            className={styles.form}
            onSubmit={e => {
                e.preventDefault();
                handleSubmit();
            }}
        >
            <fieldset className={styles.form__fieldset}>
                <legend className={styles.form__legend}>
                    Create your recipe
                </legend>
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
                    onChange={handleTypeChange(dispatch)}
                />
                {type && dishFields.get(type)}
            </fieldset>
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