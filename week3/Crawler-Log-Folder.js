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

// Submission 2
var minOperations = function(logs) {
    let stack = [];
    for (let i = 0; i < logs.length; i++) {
        let top = stack[stack.length - 1];
        if ((!top && logs[i] === "../") || (logs[i] === "./")) {
            continue;
        } else if (top && logs[i] === "../") {
            stack.pop();
        } else if (logs[i] !== "./"){
            stack.push(logs[i]);
        }
    }
    return stack.length;
};
