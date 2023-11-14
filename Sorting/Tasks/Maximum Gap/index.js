/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums = [1,3,100]) {
    nums.sort((a, b) => a - b);
    let maxDiff = 0;
    for (let i = 1; i < nums.length; i++) {
        maxDiff = Math.max(nums[i] - nums[i - 1], maxDiff);
    }
    return maxDiff;
};

console.log(maximumGap())