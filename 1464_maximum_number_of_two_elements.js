var maxProduct = function(nums) {
    let currentMax = (nums[0]-1)*(nums[1]-1);
    let nextMax = Infinity;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            nextMax = (nums[i]-1)*(nums[j]-1);
            if(currentMax < nextMax) {
                currentMax = nextMax;
            }
        }
    }

    return currentMax;
    
};


sss = [3,4,5,2];

maxProduct(sss);

// Input: nums = [3,4,5,2]
// Output: 12 
// Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 
