import v from "./field-validators";
import c from "./field-components";
import n from "./field-normalizers";

import { Field } from "redux-form";

const pizzaFields = (
    <>
        <Field name="no_of_slices" type="number"
            component={c.renderInputField} label="No. of slices"
            validate={[v.required, v.int, v.positive]}
            normalize={n.toInt}
        />
        <Field
            name="diameter" type="number"
            component={c.renderInputField} label="Diameter"
            validate={[v.required, v.float, v.positive]}
            step={0.01}
            normalize={n.toFloat}
        />
    </>
);

const soupFields = (
    <>
        <Field name="spiciness_scale" type="number"
            component={c.renderInputField} label="Spiciness scale"
            validate={[v.required, v.int, v.onSpiceScale]}
            normalize={n.toInt}
        />
    </>
)

const sandwichFields = (
    <>
        <Field name="slices_of_bread" type="number"
            component={c.renderInputField} label="Slices of bread"
            validate={[v.required, v.int, v.positive]}
            normalize={n.toInt}
        />
    </>
)

export default new Map([
    ['pizza', pizzaFields],
    ['soup', soupFields],
    ['sandwich', sandwichFields]
])