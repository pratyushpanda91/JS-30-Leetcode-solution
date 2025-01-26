/**
 * @param {Array} arr
 * @param {number} n
 * @return {Array}
 */
var flat = function (arr, n) {
    // Helper function to recursively flatten the array
    const flattenHelper = (array, currentDepth) => {
        if (currentDepth >= n) {
            return array; // If depth limit is reached, return array as is
        }

        const result = [];
        for (const element of array) {
            if (Array.isArray(element)) {
                // Recursively flatten nested arrays
                result.push(...flattenHelper(element, currentDepth + 1));
            } else {
                // Add non-array elements directly
                result.push(element);
            }
        }

        return result;
    };

    return flattenHelper(arr, 0); // Start with depth 0
};

// Example usage:
const arr1 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
console.log(flat(arr1, 0)); // Output: [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
console.log(flat(arr1, 1)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]
console.log(flat(arr1, 2)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
        return result;
    };

    return flatten(arr, depth);
};
