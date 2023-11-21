var maximumTripletValue = function(nums) {
    let max = 0;

    for(let i = 0; i < nums.length - 2; i++) { 
        for(let j = i + 1; j < nums.length - 1; j++) {
            for(let k = j + 1; k < nums.length; k++) {
                let current = 0;
                current = (nums[i] - nums[j]) * nums[k];
                if(current > max) { 
                    max = current;
                }
                if(current < 0 && max == 0) { 
                    max = 0;
                }
            }
        }
    }
    return max;
};

sss = [12,6,1,2,7];
maximumTripletValue(sss);

// Input: nums = [12,6,1,2,7]
// Output: 77
// Explanation: The value of the triplet (0, 2, 4) is (nums[0] - nums[2]) * nums[4] = 77.
// It can be shown that there are no ordered triplets of indices with a value greater than 77. 