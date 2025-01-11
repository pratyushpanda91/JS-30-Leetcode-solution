function memoize(fn) {
    const cache = new Map(); // Cache to store computed results
    
    return function(...args) {
        const key = JSON.stringify(args); // Generate a unique key based on arguments
        
        if (cache.has(key)) {
            return cache.get(key); // Return cached result if available
        }
        
        const result = fn(...args); // Compute the result
        cache.set(key, result); // Store the result in the cache
        return result;
    };
}
