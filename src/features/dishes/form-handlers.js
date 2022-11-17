import { SubmissionError, clearFields } from "redux-form";

export async function handleSubmit(values) {
    const url = process.env.REACT_APP_API_URL;
    const body = JSON.stringify(values);

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: body,
    });

    const data = await response.json();
    if (response.status === 400) {
        throw new SubmissionError(data)
    }
    alert(`Request successful. Server responded with:\n\n${JSON.stringify(data, null, 2)}`);
}

export function handleTypeChange(dispatch) {
    return function (event, newValue, previousValue, name) {
        const toClear = [
            "name",
            "no_of_slices",
            "diameter",
            "spiciness_scale",
            "slices_of_bread",
        ];
        dispatch(clearFields("Form", false, false, ...toClear));
    }
}