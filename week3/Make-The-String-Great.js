/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let top = stack[stack.length - 1];
        if (stack.length > 0 && top !== s[i] && top.toLowerCase() === s[i].toLowerCase()) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.join("");
};
