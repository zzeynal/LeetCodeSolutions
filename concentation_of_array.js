/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
size = nums.length;
ansSize = size*2;
let j = 0;
let ans = [];
for (let i = 0; i < ansSize; i++) { 
    ans[i] = (nums[j]);
    if (j < size-1)
        j++
    else
        j = 0;
    console.log(ans[i]);
}   
};

hello = [1,2,3]

getConcatenation(hello);


// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// - ans = [1,2,1,1,2,1]
