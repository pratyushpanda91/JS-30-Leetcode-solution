/**
 * @param {number} n
 * @return {Function}
 */
var createCounter = function(n) {
    let count = n;
    return function() {
        return count++;
    };
};

// Example Usage:
const counter = createCounter(10);
console.log(counter()); // Output: 10
console.log(counter()); // Output: 11
console.log(counter()); // Output: 12

const anotherCounter = createCounter(-2);
console.log(anotherCounter()); // Output: -2
console.log(anotherCounter()); // Output: -1
console.log(anotherCounter()); // Output: 0
console.log(anotherCounter()); // Output: 1
console.log(anotherCounter()); // Output: 2
