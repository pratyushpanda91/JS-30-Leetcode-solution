function cancellable(fn, args, t) {
    let timeoutId;

    // Schedule the execution of fn after t milliseconds
    timeoutId = setTimeout(() => {
        fn(...args);
    }, t);

    // Return the cancel function
    return () => {
        clearTimeout(timeoutId); // Cancels the scheduled execution
    };
}
