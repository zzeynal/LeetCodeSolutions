var maximumDifference = function(nums) {
    let diff = -1, count = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                if(count == 0){
                    diff = nums[j] - nums[i];
                    count++;
                }
                if(0<=i && i<j && j< nums.length && count>=0 && (nums[j] - nums[i])>= diff) {
                    diff = nums[j] - nums[i];
                }
            }
        }
        count++;
    }
    return diff
    
};

//sss = [1,5,2,10];

sss = [9,4,3,2];

//sss = [7,1,5.4]
maximumDifference(sss);

// Input: nums = [1,5,2,10]
// Output: 9
// Explanation:
// The maximum difference occurs with i = 0 and j = 3, nums[j] - nums[i] = 10 - 1 = 9.
