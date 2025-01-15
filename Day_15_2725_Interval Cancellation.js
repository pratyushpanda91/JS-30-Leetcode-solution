function cancellable(fn, args, t) {
    let intervalId;
    let time = 0;

    // Immediately invoke the function
    fn(...args);
    time += 0;

    // Schedule the repeated executions
    intervalId = setInterval(() => {
        fn(...args);
        time += t;
    }, t);

    // Return the cancel function
    return () => {
        clearInterval(intervalId); // Stop further executions
    };
}
