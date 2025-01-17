class TimeLimitedCache {
    constructor() {
        this.cache = new Map();
    }

    /**
     * Sets a key-value pair with a time-to-live duration in milliseconds.
     * If the key exists and has not expired, returns true; otherwise, returns false.
     * @param {number} key
     * @param {number} value
     * @param {number} duration
     * @return {boolean}
     */
    set(key, value, duration) {
        const currentTime = Date.now();
        const hasUnexpiredKey = this.cache.has(key) && this.cache.get(key).expiry > currentTime;

        if (this.cache.has(key)) {
            clearTimeout(this.cache.get(key).timeoutId); // Clear previous timeout
        }

        const timeoutId = setTimeout(() => {
            this.cache.delete(key); // Remove the key when it expires
        }, duration);

        this.cache.set(key, { value, expiry: currentTime + duration, timeoutId });
        return hasUnexpiredKey;
    }

    /**
     * Gets the value of the key if it is unexpired, otherwise returns -1.
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const currentTime = Date.now();
        if (this.cache.has(key) && this.cache.get(key).expiry > currentTime) {
            return this.cache.get(key).value;
        }
        return -1;
    }

    /**
     * Returns the count of unexpired keys.
     * @return {number}
     */
    count() {
        const currentTime = Date.now();
        let activeKeys = 0;

        for (const [key, { expiry }] of this.cache.entries()) {
            if (expiry > currentTime) {
                activeKeys++;
            } else {
                this.cache.delete(key); // Cleanup expired keys
            }
        }

        return activeKeys;
    }
}

// Example usage:
const cache = new TimeLimitedCache();
console.log(cache.set(1, 42, 100)); // false
console.log(cache.get(1)); // 42
setTimeout(() => console.log(cache.count()), 50); // 1
setTimeout(() => console.log(cache.get(1)), 150); // -1
