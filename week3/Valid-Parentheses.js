/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let top = stack[stack.length - 1]
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            stack.push(s[i]);
        } else if (top === "(" && s[i] === ")") {
            stack.pop();
        } else if (top === "[" && s[i] === "]") {
            stack.pop();
        } else if (top === "{" && s[i] === "}") {
            stack.pop();
        } else {
            return false;
        }
    }
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
};
