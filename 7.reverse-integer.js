/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const LIMIT = 2 ** 31
  const result = +(`${Math.abs(x)}`.split('').reverse().join(''))
  if (result > LIMIT) {
    return 0
  }
  return result * Math.sign(x)
}


// @lc code=end
