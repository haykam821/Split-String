function split(input = "", separator, limit) {
    return input.split(separator, limit);
}

function splitCaps(input = "") {
    return input.split(/(?=[A-Z])/);
}

module.exports = {
    split,
    splitCaps,
}