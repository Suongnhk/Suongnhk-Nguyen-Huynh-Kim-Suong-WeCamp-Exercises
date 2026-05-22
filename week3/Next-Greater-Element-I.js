/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let ans = [];
    for (let i = 0; i < nums1.length; i++) {
        let found = false;
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                for (let k = j; k < nums2.length; k++) {
                    if (nums2[j] < nums2[k]) {
                        ans.push(nums2[k]);
                        found = true;
                        break;
                    }
                }
                break;
            }
        }
        if (!found) ans.push(-1);
    }
    return ans;
};

// Submission 2 
var nextGreaterElement = function(nums1, nums2) {
    let stack = [];
    let map = {};
    for (let i = 0; i < nums2.length; i++) {
        while (stack.length > 0 && nums2[i] > stack[stack.length - 1]) {
            map[stack.pop()] = nums2[i];
        }
        stack.push(nums2[i]);
    }
    while (stack.length > 0) {
        map[stack.pop()] = -1;
    }
    return nums1.map(n => map[n]);
};
