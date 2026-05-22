/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Submission 1
var isMonotonic = function(nums) {
    let isIncreasing = true;
    let isDecreasing = true;
    for (let k = 0; k < nums.length - 1; k++) {
        if (nums[k] < nums[k + 1]) {
            for (let i = 0; i < nums.length - 1; i++) {
                if (nums[i] > nums[i+1]) {
                    isIncreasing = false;
                    break;
                }
            }
            return isIncreasing;
        }
        
        if (nums[k] > nums[k + 1]) {
            for (let j = 0; j < nums.length - 1; j++) {
                if (nums[j] < nums[j+1]) {
                    isDecreasing = false;
                    break;
                }
            }
            return isDecreasing;
        }
    }
    return true;
};


// Submission 2
var isMonotonic = function(nums) {
    let isIncreasing = true;
    let isDecreasing = true;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            isIncreasing = false;
        } else if (nums[i] < nums[i + 1]) {
            isDecreasing = false;
        } else if (isDecreasing === false && isIncreasing === false) {
            return false;
        }
    }
    return isIncreasing || isDecreasing;
};
