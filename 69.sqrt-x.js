/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let m = Math.floor(x / 2)
  let start = m, end = x
  while (start < end) {
    if (m * m <= x && (m + 1) * (m + 1) > x) {
      return m
    }
  }
  return m
}
// @lc code=end
