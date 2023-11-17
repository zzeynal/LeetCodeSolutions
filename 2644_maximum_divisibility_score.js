var maxDivScore = function(nums, divisors) {
    let currentDivcScore = 0;
    let maxDivScore = 0;
    let currentModulo = 0;

    for(let i = 0; i < divisors.length; i++) { 
        for(let j = 0; j < nums.length; j++) {
            
            currentModulo = nums[j] % divisors[i];
            if(currentModulo == 0) {
                currentDivcScore = nums[j]/divisors[i];
                if(currentDivcScore > maxDivScore) {
                    maxDivScore = currentDivcScore;
                }
            }
        }
    }
    
};

// sss = [4,7,9,3,9];
// ddd = [5,2,3];

sss = [20,14,21,10];
ddd = [5,7,5];

maxDivScore(sss, ddd);


// Input: nums = [4,7,9,3,9], divisors = [5,2,3]
// Output: 3
// Explanation: The divisibility score for every element in divisors is:
// The divisibility score of divisors[0] is 0 since no number in nums is divisible by 5.
// The divisibility score of divisors[1] is 1 since nums[0] is divisible by 2.
// The divisibility score of divisors[2] is 3 since nums[2], nums[3], and nums[4] are divisible by 3.
// Since divisors[2] has the maximum divisibility score, we return it.