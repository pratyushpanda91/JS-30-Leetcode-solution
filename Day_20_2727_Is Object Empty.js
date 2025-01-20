/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    // For objects, check if it has no keys
    if (typeof obj === "object" && !Array.isArray(obj)) {
        return Object.keys(obj).length === 0;
    }
    // For arrays, check if it has no elements
    if (Array.isArray(obj)) {
        return obj.length === 0;
    }
    // If it's neither an object nor an array, assume it is not empty
    return false;
};
