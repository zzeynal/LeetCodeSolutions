var majorityElement = function(nums) {
    let maj = 0;
    let arr = [];
    let count = 0;
    let max = 0;
    let maxNum = 0;
    let temp = 0;

    for(let i = 0; i<nums.length; i++) {
        if(nums[i] != temp) {
            temp = nums[i];
            for(let j = 0; j<nums.length; j++) {
                if(nums[j]==temp) {
                    count++;
                    //maj = nums[i];
                }
            }
            arr.push([temp, count]);
            count=0;
        }
        
    }
    if(arr.length == 1) {
        return arr[0][0];
    }
    if(arr.length > 1) {
        for(let i = 0; i < arr.length-1; i++) {
            if(arr[i][1]>arr[i+1][1] && arr[i][1]>max) {
                max = arr[i][1];
                maxNum = arr[i][0];
            }
            else if(arr[i+1][1]>arr[i][1] && arr[i+1][1]>max) {
                max = arr[i+1][1];
                maxNum = arr[i+1][0];
            }
        }
    }
    return maxNum; 
};

// sss = [3,2,3];

sss = [6,5,5];

majorityElement(sss);


// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2