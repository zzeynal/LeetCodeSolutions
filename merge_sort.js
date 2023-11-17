/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var i = 0;
    var j = 0;
    var temp = 0;
    while(i <= nums.lenth) 
    {
        if (nums1[i] < nums[i+1])
        {
            i++;
        }
        else if (nums1[i] > nums[i+1])
        {
            temp = nums1[i];
            nums1[i] = nums[i+1];
            nums1[i+1] = temp;
        }
    }
    return nums1;
    
};

nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
merge(nums1,m,nums2,n);