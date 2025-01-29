var ArrayWrapper = function(nums) {
    this.nums = nums; // Store the array
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    return this.nums.reduce((sum, num) => sum + num, 0); // Sum all elements
};

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    return `[${this.nums.join(",")}]`; // Convert array to string format [1,2,3]
};
