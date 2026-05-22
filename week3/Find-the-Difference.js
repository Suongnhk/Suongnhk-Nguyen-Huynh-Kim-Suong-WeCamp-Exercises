/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let result;
    s = s.split("").sort().join("");
    t = t.split("").sort().join("");
    for (let i = 0; i < s.length; i++) {
        if  (s[i] !== t[i]) {
            return result = t[i];
        } 
    }
    return result = t[t.length - 1];
};

 // Submission 2
var findTheDifference = function(s, t) {
    let map = {};
    for (let char of s) {
        if (map[char]) {
            map[char] += 1;
        } else {
            map[char] = 1;
        }
    }
    for (let char of t) {
        if ((!map[char]) || (map[char] === 0)) {
            return char;
        }
        map[char]--
    }
};
