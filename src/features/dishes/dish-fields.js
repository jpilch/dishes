import v from "./field-validators";
import c from "./field-components";

import { Field } from "redux-form";

const pizzaFields = (
    <>
        <Field name="no_of_slices" type="number"
            component={c.renderInputField} label="No. of slices"
            validate={[v.required, v.int]}
        />
        <Field
            name="diameter" type="number"
            component={c.renderInputField} label="Diameter"
            validate={[v.required, v.float]}
            step={0.01}
        />
    </>
);

const soupFields = (
    <>
        <Field name="spiceness_scale" type="number"
            component={c.renderInputField} label="Spiciness scale"
            validate={[v.required, v.int, v.onSpiceScale]}
        />
    </>
)

const sandwichFields = (
    <>
        <Field name="slices_of_bread" type="number"
            component={c.renderInputField} label="Slices of bread"
            validate={[v.required, v.int]}
        />
    </>
)

export default new Map([
    ['pizza', pizzaFields],
    ['soup', soupFields],
    ['sandwich', sandwichFields]
])