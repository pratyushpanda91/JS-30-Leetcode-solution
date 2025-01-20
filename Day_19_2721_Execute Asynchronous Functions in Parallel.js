/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;
        let hasRejected = false;

        functions.forEach((fn, index) => {
            fn()
                .then((value) => {
                    if (hasRejected) return;

                    results[index] = value; // Store the resolved value in the correct order
                    completed++;

                    // If all promises are resolved, resolve the main promise
                    if (completed === functions.length) {
                        resolve(results);
                    }
                })
                .catch((error) => {
                    if (!hasRejected) {
                        hasRejected = true; // Mark as rejected to avoid duplicate calls
                        reject(error); // Reject the main promise immediately
                    }
                });
        });
    });
};

/**
 * Example Usage:
 * const promise = promiseAll([
 *   () => new Promise(res => setTimeout(() => res(42), 100)),
 *   () => new Promise(res => setTimeout(() => res(24), 200))
 * ]);
 * promise.then(console.log); // [42, 24]
 * 
 * const promiseWithError = promiseAll([
 *   () => new Promise(res => setTimeout(() => res(42), 100)),
 *   () => new Promise((_, rej) => setTimeout(() => rej("Error"), 50))
 * ]);
 * promiseWithError.catch(console.error); // "Error"
 */
