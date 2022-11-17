function required(value) { return !value ? 'Required' : undefined; }

function int(value) {
    return value && isNaN(parseInt(value))
        ? 'Must be a number'
        : undefined
}

function positive(value) {
    return value && parseFloat(value) <= 0
        ? 'Must be positive'
        : undefined;
}

function intInRange(from, to) {
    return function (value) {
        return int(value) || (value < from || value > to)
            ? `Must be in range ${from} - ${to}`
            : undefined;
    }
}

function float(value) {
    return value && isNaN(parseFloat(value))
        ? "Must be a floating point number"
        : undefined;
}

function onSpiceScale(value) {
    return intInRange(1, 10)(value);
}

function inTimeFormat(text) {
    return text.search(/\b((0[1-9])|(1[0-9])|(2[0-4])):[0-5][0-9]:[0-5][0-9]\b/) === -1
        ? "Must be in format HH:MM:SS"
        : undefined;
}

export default {
    required,
    int,
    positive,
    float,
    onSpiceScale,
    inTimeFormat
};