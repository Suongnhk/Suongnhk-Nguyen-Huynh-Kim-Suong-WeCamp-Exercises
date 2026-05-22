/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    s = s.split("").sort().join("");
    t = t.split("").sort().join("");
    if (s.length !== t.length) return false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== t[i]) {
            return false;
        }
    }
    return true
};

// Submission 2
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let count = {};
    for (let char of s) {
        if (count[char]) {
            count[char] += 1;
        } else {
            count[char] = 1
        }
    }
    for (let char of t) {
        if (!count[char]) {
            return false;
        } else {
            count[char]--;
        }
    }
    return true;
};
