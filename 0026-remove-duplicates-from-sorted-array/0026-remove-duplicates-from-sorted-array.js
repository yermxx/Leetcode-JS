/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] == nums[j+1]) {
            nums.splice(j, 1);
            j--;
        }
    }
};
