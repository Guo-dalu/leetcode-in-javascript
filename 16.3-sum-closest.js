/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  const arr = nums.sort((a, b) => a - b)
  const getDistance = (a, b) => Math.abs(a - b)
  let temp = Infinity
  for (let i = 0; i < arr.length - 2; i++) {
    let j = i + 1, k = arr.length - 1
    while (j < k) {
      const sum = arr[i] + arr[j] + arr[k]
      if (sum === target) {
        return sum
      }
      if (getDistance(sum, target) < getDistance(temp, target)) {
        temp = sum
      }
      if (sum > target) {
        k--
      } else {
        j++
      }
    }
  }
  return temp
}
// @lc code=end
