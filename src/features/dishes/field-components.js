const renderInputField = ({ input, label, type, step, meta: { touched, error } }) => {
    return (
        <div >
            <label >{label}</label>
            <input
                {...input}
                step={step}
                type={type}
            />
            {touched && error && <span >{error}</span>}
        </div >
    )
}

const renderSelectField = ({ input, label, type, meta: { touched, error } }) => {
    return (
        <div  >
            <label >{label}</label>
            <select
                {...input}
                placeholder={label}
                type={type}
            >
                <option></option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="sandwich">Sandwich</option>
            </select >
            {touched && error && <span >{error}</span>}
        </div >
    );
}

export default {
    renderInputField,
    renderSelectField
}