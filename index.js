/**
 * Wraps around the normal splitting method of strings.
 * @param {input} The string to split.
 * @param {(string|RegExp)} separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
 * @param {number} [limit] A value used to limit the number of elements returned in the array.
 * @returns {string[]}
 */
function split(input = "", separator, limit) {
    return input.split(separator, limit);
}

/**
 * Splits each string at an uppercase letter.
 * @param {string} input The string to split.
 */
function splitCaps(input = "") {
    return input.split(/(?=[A-Z])/);
}

module.exports = {
    split,
    splitCaps,
}