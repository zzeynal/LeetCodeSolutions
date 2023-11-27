var majorityElement = function(nums) {
    let maj = 0;
    let arr = [];
    let count = 0;
    let max = 0;

    for(let i = 0; i<nums.length; i++) {
        for(let j = i+1; j<nums.length; j++) {
            if(nums[j]==nums[i] && nums[j] != maj) {
                count++;
                maj = nums[i];
            }
        }
        arr.push([maj, count]);
        count=0;
    }
    for(let i = 0; i < arr.length; i++) {
        if(arr.length == 1) {
            return arr[0][0];
        }
        if(arr.length > 1) {
            if(arr[i][1]>arr[i+1][1] && arr[i][1]>max) {
                max = arr[i][1]
            }
        }
    }
    return max; 
};

sss = [3,2,3];

majorityElement(sss);


// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2