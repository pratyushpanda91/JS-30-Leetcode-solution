/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    // Create a map to store objects by their id
    const map = new Map();

    // Add objects from arr1 to the map
    for (const obj of arr1) {
        map.set(obj.id, obj);
    }

    // Merge objects from arr2 into the map
    for (const obj of arr2) {
        if (map.has(obj.id)) {
            // Merge the two objects, prioritizing arr2
            map.set(obj.id, { ...map.get(obj.id), ...obj });
        } else {
            // Add the new object from arr2
            map.set(obj.id, obj);
        }
    }

    // Convert the map's values to an array and sort by id
    return Array.from(map.values()).sort((a, b) => a.id - b.id);
};
