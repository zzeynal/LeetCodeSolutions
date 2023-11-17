

var countPairs = function(nums, k) {
    let result = 0;
    let size = nums.length;
    for(let i = 0; i < size; i++) {
        for(let j = i; j < size; j++) {
            if(nums[i] == nums[j] && i != j) {
                if(i*j%k == 0) {
                    result++;
                    console.log(result);
                }
            else {
                j = j;
                }
            }
        }
    }
    return result;

};

hello = [3,1,2,2,2,1,3];
b = 2;

countPairs(hello, b);



// Input: nums = [3,1,2,2,2,1,3], k = 2
// Output: 4
// Explanation:
// There are 4 pairs that meet all the requirements:
// - nums[0] == nums[6], and 0 * 6 == 0, which is divisible by 2.
// - nums[2] == nums[3], and 2 * 3 == 6, which is divisible by 2.
// - nums[2] == nums[4], and 2 * 4 == 8, which is divisible by 2.
// - nums[3] == nums[4], and 3 * 4 == 12, which is divisible by 2.