/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const dict = {}
  for (let i = 0; i < nums.length; i++) {
    if (dict[nums[i]] !== undefined) {
      return [dict[nums[i]], i]
    }
    dict[target - nums[i]] = i
  }
}
// @lc code=end
