var once = function(fn) {
    let called = false; // Flag to check if the function has already been called
    return function(...args) {
        if (called) return undefined; // Return undefined if already called
        called = true; // Set the flag to true on first call
        return fn(...args); // Call the original function
    };
};
