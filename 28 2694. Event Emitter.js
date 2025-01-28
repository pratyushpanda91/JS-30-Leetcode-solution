class EventEmitter {
    constructor() {
        this.events = {}; // Object to store event callbacks
    }

    /**
     * Subscribes to an event with a callback.
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object} An object with an unsubscribe method
     */
    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = []; // Initialize if the event doesn't exist
        }

        const listeners = this.events[eventName];
        listeners.push(callback);

        return {
            unsubscribe: () => {
                // Remove the callback from the listeners array
                const index = listeners.indexOf(callback);
                if (index !== -1) {
                    listeners.splice(index, 1);
                }
            }
        };
    }

    /**
     * Emits an event and calls all subscribed callbacks with the provided arguments.
     * @param {string} eventName
     * @param {Array} args
     * @return {Array} An array of results from the callbacks
     */
    emit(eventName, args = []) {
        if (!this.events[eventName]) {
            return []; // Return an empty array if no listeners exist for the event
        }

        // Call each listener with the provided arguments and collect results
        return this.events[eventName].map(callback => callback(...args));
    }
}
