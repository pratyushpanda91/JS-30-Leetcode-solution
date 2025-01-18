/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timeout;

    return function(...args) {
        // Clear any existing timeout to cancel previous calls
        clearTimeout(timeout);
        
        // Set a new timeout for the function execution
        timeout = setTimeout(() => {
            fn(...args); // Execute the function with the latest arguments
        }, t);
    };
};

/**
 * Example Usage:
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
