/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string}
 * @return {number}
 */
var romanToInt = function (s) {
  const symbolMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  let result = 0
  while (s.length !== 0) {
    if (['I', 'X', 'C'].indexOf(s[0]) !== -1 && symbolMap[s[0]] < symbolMap[s[1]]) {
      result += symbolMap[s[1]] - symbolMap[s[0]]
      s = s.slice(2)
    } else {
      result += symbolMap[s[0]]
      s = s.slice(1)
    }
  }
  return result
}
// @lc code=end
