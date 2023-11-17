
var findKDistantIndices = function(nums, key, k) {
    let arr = [];
    let arr2 = [];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == key) { 
            arr.push(i);
        }
    }

    if (arr.length === nums.length) { 
        return arr;
    }

    let sss = -1;
    for (var j = 0; j < arr.length; j++) {
        for (var m = 0; m < nums.length; m++) {
            let temp = m-arr[j];
            let abs = temp < 0  ? temp*-1 : temp;
            if ( abs <= k && sss < m) {
                sss = m;
                arr2.push(sss);
            }

        }
    }
    return arr2;
};

// abc = [3,4,9,1,3,9,5];
// kkk = 9;
// b = 1;

// abc = [2,2,2,2,2];
// kkk = 2;
// b = 2;

abc = [1,1000,1,1000];
kkk = 1;
b = 1;

findKDistantIndices(abc, kkk, b);

// Input: nums = [3,4,9,1,3,9,5], key = 9, k = 1
// Output: [1,2,3,4,5,6]
// Explanation: Here, nums[2] == key and nums[5] == key.
// - For index 0, |0 - 2| > k and |0 - 5| > k, so there is no j where |0 - j| <= k and nums[j] == key. Thus, 0 is not a k-distant index.
// - For index 1, |1 - 2| <= k and nums[2] == key, so 1 is a k-distant index.
// - For index 2, |2 - 2| <= k and nums[2] == key, so 2 is a k-distant index.
// - For index 3, |3 - 2| <= k and nums[2] == key, so 3 is a k-distant index.
// - For index 4, |4 - 5| <= k and nums[5] == key, so 4 is a k-distant index.
// - For index 5, |5 - 5| <= k and nums[5] == key, so 5 is a k-distant index.
// - For index 6, |6 - 5| <= k and nums[5] == key, so 6 is a k-distant index.
// Thus, we return [1,2,3,4,5,6] which is sorted in increasing order. 
