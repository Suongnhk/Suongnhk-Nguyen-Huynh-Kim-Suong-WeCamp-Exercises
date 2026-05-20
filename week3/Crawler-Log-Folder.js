/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let depth = 0;
    for (let i = 0; i < logs.length; i++) {
        if (logs[i] === "../") {
            depth = Math.max(0, depth - 1)
        } else if (logs[i] !== "./") {
            depth += 1;
        }
    }
    return depth;
};
