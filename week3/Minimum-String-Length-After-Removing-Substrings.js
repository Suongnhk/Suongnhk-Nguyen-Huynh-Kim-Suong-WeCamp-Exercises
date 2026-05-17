/**
 * @param {string} s
 * @return {number}
 */
// Submission 1
var minLength = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let top = stack[stack.length - 1];
        if ((top === "A" && s[i] === "B") || (top === "C" && s[i] === "D")) {
            stack.pop();
        } else {
            stack.push(s[i])
        }
    }
    return stack.length;
};

// Submission 2
var minLength = function(s) {
    while (s.includes("AB") || s.includes("CD")) {
        s = s.replace("AB","");
        s = s.replace("CD","");
    }
    return s.length;
};
