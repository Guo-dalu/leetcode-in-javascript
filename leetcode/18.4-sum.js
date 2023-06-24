/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (arr, target) {
  if (arr.length < 4) {
    return []
  }
  const nums = arr.sort((a, b) => a - b)
  const len = nums.length
  const result = []
  const max3 = nums[len - 1] + nums[len - 2] + nums[len - 3]
  const max2 = nums[len - 1] + nums[len - 2]
  for (let i = 0; i < len - 3; i++) {
    while ((i > 0 && nums[i] === nums[i - 1]) || nums[i] < target - max3) i++
    if (nums[i] * 4 > target) {
      return result
    }
    for (let j = i + 1; j < len - 2; j++) {
      while ((j > i + 1 && nums[j] === nums[j - 1]) || nums[j] < target - max2 - nums[i]) j++
      let l = j + 1, r = len - 1
      let sum2 = target - nums[i] - nums[j]
      while (l < r) {
        if (nums[l] + nums[r] === sum2) {
          result.push([nums[i], nums[j], nums[l], nums[r]])
          while (nums[l] === nums[l + 1]) l++
          while (nums[r] === nums[r - 1]) r--
          l++
          r--
        } else if (nums[l] + nums[r] < sum2) {
          l++
        } else {
          r--
        }
      }
    }
  }
  return result
}


// @lc code=end
