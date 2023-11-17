/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {

    let min = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] == target) {
            if(count == 0) {
                min = abs(i-start);
            }
            if(abs(i-start) < min && count>0) {
                min = abs(i-start);
            }
        }
    }
        return min;
    };
var abs = function(num) {
    let abs = num < 0 ? num*-1 : num;
    return abs;
}

var minimumDistance = function(x, y) {
    let distance = x < 0 ? x : y
    return distance;
}


sss = [5,2,3,5,5];
t = 5;
s = 2;

// sss = [5,3,6];
// t = 5;
// s = 2;

// sss = [1,2,3,4,5]
// t = 5;
// s = 3

// sss = [1,1,1,1,1,1,1,1,1,1]
// t = 1;
// s = 0;

// sss = [1,1,1,1,1,1,1,1,1,1]
// t = 1;
// s = 9;

getMinDistance(sss, t, s);

// Input: nums = [1,2,3,4,5], target = 5, start = 3
// Output: 1
// Explanation: nums[4] = 5 is the only value equal to target, so the answer is abs(4 - 3) = 1.