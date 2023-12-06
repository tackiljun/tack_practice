// 
////////////////////////////////////////////////////////////////////////
// Example1.
// input : nums = [0, 1, 0, 3, 12]
// output : [1, 3, 12, 0, 0]
//////////////////////////////////////////
// Example2.
// input : nums = [0]
// output : [0]
//////////////////////////////////////////
// Constraints.
// 1. 1 <= nums.length <= 10의4승.
// 2. -2의 31승 <= nums[i] <= 2의 32승 -1.

////////////////////////////////////////////////////////////////////////
// @param {Number[]} nums
// @return {void} Do not return anything, modify nums in-place instead.

////////////////////////////////////////////////////////////////////////
var moveZeroes = function(nums) {

    let j = 0

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            // swap.
            let temp = nums[j]
            nums[j] = nums[i]
            nums[i] = temp

            j++
        }
    }
};