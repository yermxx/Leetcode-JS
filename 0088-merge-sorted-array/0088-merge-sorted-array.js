/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    let newLen = m + n;

    for (let i = m; i < newLen; i++) {
        if (nums1[i] === 0) {
            nums1.splice(i, 1);
            i--;
        }
    }

    for (let j = 0; j < nums2.length; j++) {
        nums1.push(nums2[j]);
    }

    return nums1.sort((a, b) => a - b);

};