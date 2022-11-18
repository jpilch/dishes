function toInt(value) {
    const parsed = parseInt(value);
    return isNaN(parsed) ? "" : parsed;
}

function toFloat(value) {
    const parsed = parseFloat(value);
    return isNaN(parsed) ? "" : parsed;
}

const normalizers = {
    toInt,
    toFloat
}

export default normalizers;