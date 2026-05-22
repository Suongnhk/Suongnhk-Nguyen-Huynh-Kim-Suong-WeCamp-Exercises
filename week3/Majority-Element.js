/**
 * @param {number[]} nums
 * @return {number}
 */
// Submission 1
var majorityElement = function(nums) {
    let count = {};
    for (let num of nums) {
        if (count[num] > 0) {
            count[num] += 1;
        } else {
            count[num] = 1;
        }
        if (count[num] > (nums.length / 2)) return num;
    }
};

// Submission 2
var majorityElement = function(nums) {
    nums = nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)];
};
