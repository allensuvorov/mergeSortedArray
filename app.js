// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]
 

// Constraints:

// -10^9 <= nums1[i], nums2[i] <= 10^9
// nums1.length == m + n
// nums2.length == n

var merge = function(nums1, m, nums2, n) {
    if (n) {
        for (let i = nums1.length-1; i >= 0; i--){
            console.log('i =', i);
            
            if (m && nums1[m-1] >= nums2[n-1])  {
                console.log(`putting ${nums1[m-1]} to ${i} in nums1.`, "m is", m);
                nums1[i] = nums1[m-1];
                console.log(`now nums1[${i}] is ${nums1[i]}`)
                m--;
            } else if (m===0 || nums1[m-1] < nums2[n-1]) {
                console.log(`putting ${nums2[n-1]} to ${i} in nums1.`,"n is", n);
                nums1[i] = nums2[n-1];
                console.log(`now nums1[${i}] is ${nums2[n-1]}`)
                n--;
                if (n === 0) break;
            };
        };
    };
    return nums1;
};

nums1 = [1,2,3,0,0,0], m = 3;
nums2 = [2,5,6],       n = 3;

console.log(merge (nums1, m, nums2, n));
// console.log(merge ([0], 0, [1], 1));
// console.log(merge ([1,2,0,0], 2, [1,1], 2));
// console.log(merge ([5,6,0,0], 2, [3,4], 2));