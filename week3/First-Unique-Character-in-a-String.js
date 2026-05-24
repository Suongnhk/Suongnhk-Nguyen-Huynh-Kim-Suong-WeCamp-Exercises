/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function(s) {
    let map = {};
    for (let char of s) {
        if (map[char]) {
            map[char]++
        } else {
            map[char] = 1
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) return i;
    }
    return -1;
};
