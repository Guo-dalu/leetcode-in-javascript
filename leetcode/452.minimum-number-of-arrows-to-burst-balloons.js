/*
 * @lc app=leetcode id=452 lang=javascript
 *
 * [452] Minimum Number of Arrows to Burst Balloons
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  if (points.length === 0) {
    return 0
  }
  const arr = points.sort((a, b) => a[1] - b[1])
  let arrowCount = 1
  let curIndex = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] <= arr[curIndex][1]) {
      continue
    } else {
      curIndex = i
      arrowCount++
    }
  }
  return arrowCount
}
// @lc code=end
