/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, depth) {
    // Helper function for recursive flattening
    const flatten = (array, currentDepth) => {
        if (currentDepth === 0) {
            return array; // Stop flattening when depth limit is reached
        }

        let result = [];
        for (const element of array) {
            if (Array.isArray(element)) {
                // Recursively flatten nested arrays
                result = result.concat(flatten(element, currentDepth - 1));
            } else {
                // Add non-array elements to the result
                result.push(element);
            }
        }
        return result;
    };

    return flatten(arr, depth);
};
