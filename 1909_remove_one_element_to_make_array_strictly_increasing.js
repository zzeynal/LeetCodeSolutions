var canBeIncreasing = function(nums) {
    let temp = 0;
    let isIcreasing = false;

    for(let i = 0; i < nums.length; i++) {
        temp = nums[i];
        nums.splice(i, 1)
        if(nums.length == 1) {
            isIcreasing = true;
            return isIcreasing;
        }
        for(let j = 0; j < nums.length-1; j++) {
            if(nums[j] < nums[j+1]) {
                isIcreasing = true;
            }
            else {
                isIcreasing = false;
                break;
            }
        }
        if(isIcreasing) {
            return isIcreasing;
        }
        nums.splice(i, 0, temp);
    }
    return isIcreasing;
};

// sss = [1,2,10,5,7];

sss = [512,867,904,997,403]

canBeIncreasing(sss);