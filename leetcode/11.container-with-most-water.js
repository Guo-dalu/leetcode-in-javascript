/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
// @lc code=start

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = -Infinity
  let left = 0, right = height.length - 1
  const getArea = (r, l) => (r - l) * (height[l] < height[r] ? height[l] : height[r])
  while (left < right) {
    const area = getArea(right, left)
    if (area > max) {
      max = area
    }
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  return max
}
// @lc code=end
