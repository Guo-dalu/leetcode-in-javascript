/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) {
    return []
  }
  const result = []
  const sortedNums = nums.sort((a, b) => a - b)
  const target = 0
  for (let i = 0; i < sortedNums.length - 2; i++) {
    if (sortedNums[i] > target) {
      return result
    }
    // 取重复的数当中的第一个数
    if (i >= 1 && sortedNums[i - 1] === sortedNums[i]) {
      continue
    }
    let j = i + 1, k = sortedNums.length - 1
    while (j < k) {
      if (sortedNums[i] + sortedNums[j] + sortedNums[k] === target) {
        result.push([sortedNums[i], sortedNums[j], sortedNums[k]])
        // 取重复的数当中的最后一个数
        while (sortedNums[j] === sortedNums[j + 1]) {
          j++
        }
        while (sortedNums[k] === sortedNums[k - 1]) {
          k--
        }
        j++
        k--
      } else if (sortedNums[j] + sortedNums[k] < target - sortedNums[i]) {
        j++
      } else {
        k--
      }
    }
  }
  return result
}
// @lc code=end
