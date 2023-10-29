// Example 1:
// Input: nums = [2][2][1][1]
// Output: [1][1][2][2]
// Example 2:
// Input: nums = [2][1]
// Output: [1][2]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let minIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        minIndex = i
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j
            }
        }
        let temp = nums[minIndex]
        nums[minIndex] = nums[i]
        nums[i] = temp
    }
    return nums
};
console.log(sortColors([
    2,
    0,
    2,
    1,
    1,
    0
]))
