const numberFields = new Set([
    "no_of_slices",
    "spiciness_scale",
    "slices_of_bread",
]);

const floatFields = new Set([
    "diameter",
])

export default async function handleSubmit(values) {
    const url = process.env.REACT_APP_API_URL;
    const body = JSON.stringify(values, (k, v) => {
        if (numberFields.has(k)) {
            return parseInt(v);
        }
        if (floatFields.has(k)) {
            return parseFloat(v);
        }
        return v;
    },
    );
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: body,
    });
    const data = await response.json();
    alert(`Server responded with:\n\n${JSON.stringify(data, null, 2)}`);
}