var addTwoPromises = async function(promise1, promise2) {
    const value1 = await promise1; // Wait for promise1 to resolve
    const value2 = await promise2; // Wait for promise2 to resolve
    return value1 + value2;        // Return the sum of the resolved values
};
