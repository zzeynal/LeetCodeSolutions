var decompressRLElist = function(nums) {
    let result = [];
    size = nums.length;
    let freq;
    let val;
    for (let i = 0; i < size; i++) {
        if(i%2 == 0) {
            freq = nums[i]
            val = nums[i+1]
            for (let j = 0; j < freq; j++) {
                result.push(val);
                // console.log(val)
                console.log(result);
        }
        
    }
        else if (i%2 != 0) {
            i = i;
        }

    }
    
    // console.log(result);
    return result;
    
    
};

hello = [62,31,13,24,55,53,24,81,54,93,87,56,6,69];
// hello = [1,1,2,3];

decompressRLElist(hello);

// Input: nums = [1,2,3,4]
// Output: [2,4,4,4]
// Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
// The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
// At the end the concatenation [2] + [4,4,4] is [2,4,4,4].