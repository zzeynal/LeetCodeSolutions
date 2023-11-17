/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    var size = nums.length;
    let ans = [];
    for(let i=0; i<size; i++){
        ans[i] = nums[nums[i]];
        console.log(ans[i]);
    }
     console.log(ans);
};

hello = [0,2,1,5,3,4]

buildArray(hello);