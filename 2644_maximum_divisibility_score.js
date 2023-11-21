var maxDivScore = function(nums, divisors) {

    let maxTimeDiv = 0;
    let res = Infinity;

    for(let i = 0; i<divisors.length; i++) {
        let count = 0;
        for(let j = 0; j<nums.length; j++) {
            if(nums[j]%divisors[i] == 0) {
                count++;
            }

            if(count>maxTimeDiv) {
                maxTimeDiv = count;
                res = divisors[i];
            }

            if(count == maxTimeDiv && res > divisors[i]) {
                res = divisors[i]
            }
        }
    }

    return res;
}

sss = [4,7,9,3,9];
ddd = [5,2,3];

// sss = [20,14,21,10];
// ddd = [7,5,5];

// sss = [73,13,20,6]
// ddd = [56,75,83,26,24,53,56,61]
maxDivScore(sss, ddd);


// Input: nums = [4,7,9,3,9], divisors = [5,2,3]
// Output: 3
// Explanation: The divisibility score for every element in divisors is:
// The divisibility score of divisors[0] is 0 since no number in nums is divisible by 5.
// The divisibility score of divisors[1] is 1 since nums[0] is divisible by 2.
// The divisibility score of divisors[2] is 3 since nums[2], nums[3], and nums[4] are divisible by 3.
// Since divisors[2] has the maximum divisibility score, we return it.



// Input: nums = [20,14,21,10], divisors = [5,7,5]
// Output: 5
// Explanation: The divisibility score for every element in divisors is:
// The divisibility score of divisors[0] is 2 since nums[0] and nums[3] are divisible by 5.
// The divisibility score of divisors[1] is 2 since nums[1] and nums[2] are divisible by 7.
// The divisibility score of divisors[2] is 2 since nums[0] and nums[3] are divisible by 5.
// Since divisors[0], divisors[1], and divisors[2] all have the maximum divisibility score, we return the minimum of them (i.e., divisors[2]).