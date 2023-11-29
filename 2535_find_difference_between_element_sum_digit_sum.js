var differenceOfSum = function(nums) {
    let elementSum = 0;
    let digitSum = 0;

    for (var i = 0; i < nums.length; i++) {
        elementSum += nums[i];
    }

    for(var i = 0; i < nums.length; i++) {
        if(nums[i] < 10) {
            digitSum += nums[i];
        }
        else if(nums[i] > 10) {
            while(nums[i]>0) {
                digitSum += nums[i]%10;
                nums[i] = Math.floor(nums[i]/10);
            }
        }
    }

    return elementSum - digitSum;
    
};

// sss = [1,15,6,3];

sss = [2,7,8,10,8,10,1,10,5,9]

differenceOfSum(sss);