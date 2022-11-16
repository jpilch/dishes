import cn from "classnames";

import styles from "../../styles/Form.module.scss";

const renderInputField = ({ input, label, type, step, meta: { touched, error } }) => {
    return (
        <div className={styles.form__field}>
            <label className={styles.form__label}>
                {label}
            </label>
            <input
                className={cn({
                    [styles.form__input]: true,
                    [styles["form__input--error"]]: touched && error,
                })}
                {...input}
                step={step}
                type={type}
            />
            {touched && error && (
                <span className={styles.form__error}>
                    {error}
                </span>
            )}
        </div >
    )
}

const renderSelectField = ({ input, label, type, meta: { touched, error } }) => {
    return (
        <div className={styles.form__field}>
            <label className={styles.form__label}>
                {label}
            </label>
            <select
                className={cn({
                    [styles.form__select]: true,
                    [styles["form__select--error"]]: touched && error,
                })}
                {...input}
                placeholder={label}
                type={type}
            >
                <option></option>
                <option value="pizza">
                    Pizza
                </option>
                <option value="soup">
                    Soup
                </option>
                <option value="sandwich">
                    Sandwich
                </option>
            </select >
            {touched && error && (
                <span className={styles.form__error}>
                    {error}
                </span>
            )}
        </div >
    );
}

export default {
    renderInputField,
    renderSelectField
}