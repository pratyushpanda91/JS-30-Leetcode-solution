/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    return this.reduce((grouped, item) => {
        const key = fn(item); // Compute the key using the provided function
        if (!grouped[key]) {
            grouped[key] = []; // Initialize an array for the key if it doesn't exist
        }
        grouped[key].push(item); // Add the current item to the corresponding group
        return grouped;
    }, {}); // Start with an empty object
};
