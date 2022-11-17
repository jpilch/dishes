import v from "./field-validators";
import c from "./field-components";

import { Field } from "redux-form";

const pizzaFields = (
    <>
        <Field name="no_of_slices" type="number"
            component={c.renderInputField} label="No. of slices"
            validate={[v.required, v.int, v.positive]}
            normalize={value => parseInt(value)}
        />
        <Field
            name="diameter" type="number"
            component={c.renderInputField} label="Diameter"
            validate={[v.required, v.float, v.positive]}
            step={0.01}
            normalize={value => parseFloat(value)}
        />
    </>
);

const soupFields = (
    <>
        <Field name="spiciness_scale" type="number"
            component={c.renderInputField} label="Spiciness scale"
            validate={[v.required, v.int, v.onSpiceScale]}
            normalize={value => parseInt(value)}
        />
    </>
)

const sandwichFields = (
    <>
        <Field name="slices_of_bread" type="number"
            component={c.renderInputField} label="Slices of bread"
            validate={[v.required, v.int, v.positive]}
            normalize={value => parseInt(value)}
        />
    </>
)

export default new Map([
    ['pizza', pizzaFields],
    ['soup', soupFields],
    ['sandwich', sandwichFields]
])