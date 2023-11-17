var findNumbers = function(nums) {
    let k = 0;
    let temp = 0;
    let count = 0;
    temp = nums[0];
    let arr = [];
    for(let i = 0; i<nums.length; i++) {
        temp = nums[i]
        k=0;
        for(let j = 0; temp>=1; j++) {
            temp = temp/10;
            k++;
        }
        if(k%2 == 0) {
            count++;
        }
        arr.push(k);
    }
    return count;  
};


// hello = [12,345,2,6,7896];

// hello = [1234567890]
hello = [100000];

findNumbers(hello);

// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation: 
// 12 contains 2 digits (even number of digits). 
// 345 contains 3 digits (odd number of digits). 
// 2 contains 1 digit (odd number of digits). 
// 6 contains 1 digit (odd number of digits). 
// 7896 contains 4 digits (even number of digits). 
// Therefore only 12 and 7896 contain an even number of digits.