import { SubmissionError } from "redux-form";

export default async function handleSubmit(values) {
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