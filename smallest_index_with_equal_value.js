var smallestEqual = function(nums) {
    let size = nums.length;
    for(let i = 0; i < size; i++) {
        if(i%10 == nums[i]) {
            return i;      
        }
    }
    return -1;
};

/*


*/


// hello = [1,1,2]
//  hello = [4,3,2,1];
 hello = [1,2,3,4,5,6,7,8,9,0];

smallestEqual(hello)

// Input: nums = [0,1,2]
// Output: 0
// Explanation: 
// i=0: 0 % 10 = 0 == nums[0].
// i=1: 1 % 10 = 1 == nums[1].
// i=2: 2 % 10 = 2 == nums[2].
// All indices have i mod 10 == nums[i], so we return the smallest index 0.

// Input: nums = [4,3,2,1]
// Output: 2
// Explanation: 
// i=0: 0 mod 10 = 0 != nums[0].
// i=1: 1 mod 10 = 1 != nums[1].
// i=2: 2 mod 10 = 2 == nums[2].
// i=3: 3 mod 10 = 3 != nums[3].
// 2 is the only index which has i mod 10 == nums[i].
