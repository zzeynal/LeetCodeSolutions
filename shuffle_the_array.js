/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let ans = []
    for(let i = 0; i < n; i++) {
            ans.push(nums[i]);
            ans.push(nums[i + n]);
        }
        console.log(ans);
        return ans;
    }


hello = [2,5,1,3,4,7]; 
n = 3;

shuffle(hello, n);

// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].


