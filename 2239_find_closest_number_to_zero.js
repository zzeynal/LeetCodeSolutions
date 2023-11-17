var findClosestNumber = function(nums) {
    let closest = nums[0];
    let closestAbs = abs(closest);

    for (let i = 1; i < nums.length; i++) {
        let currentNumber = nums[i];
        let currentNumberAbs = abs(currentNumber);

        if (currentNumberAbs <= closestAbs) {
            if(currentNumberAbs < closestAbs) {
                closest = currentNumber;
                closestAbs = currentNumberAbs;
            }
            else if(closest < currentNumber) {
                closest = currentNumber;
                closestAbs = currentNumberAbs;
            }
        }
    }
    console.log(closest);
    return closest;
};

var abs = function(num) {
    let abs = num < 0 ? num*-1 : num;
    return abs;
}

//sss = [61488,18221,-1321,90249,-62158,55128,-93476,53905,57644,24630,89599,-95795,-14891,-60298,17690,99022,-24006,-89156,80135,-46303,18812,59924,32024,82924,-47519,-77086,1763,68618,53629,-56957,95485,99630,-7977,31164,94481,-80239,-57749,-3319,-58231,-94841,-19292,33200,-31446,-3528,2229,74241,-19992,-91852,-28073,31453,-74484,35491,38870,-9499,39838,87369,21123,-38616,-89277,-14541,-81586,-18569,-58242,-71216,10816,15086,-10519,51080,53257,-4912,-37142,-16723,-69795,54937,-24920,68970,-10010,-81717,36203,-67939,73877,-58258,-57183,36637,91518,-8492,-57476,50523,62462,73152,-9511,-66761,28333,-87163,5187];

sss = [-4,-2,-1,1,8]
//sss = [2,-1 ,1];
// sss = [-100000,-100000]
findClosestNumber(sss);


// Input: nums = [-4,-2,1,4,8]
// Output: 1
// Explanation:
// The distance from -4 to 0 is |-4| = 4.
// The distance from -2 to 0 is |-2| = 2.
// The distance from 1 to 0 is |1| = 1.
// The distance from 4 to 0 is |4| = 4.
// The distance from 8 to 0 is |8| = 8.
// Thus, the closest number to 0 in the array is 1.

// Input: nums = [2,-1,1]
// Output: 1
// Explanation: 1 and -1 are both the closest numbers to 0, so 1 being larger is returned.