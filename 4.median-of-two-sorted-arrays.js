/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * Your runtime beats 77.23 % of javascript submissions
    Your memory usage beats 100 % of javascript submissions (38.4 MB)
 */
// eslint-disable-next-line
var findMedianSortedArrays = function(nums1, nums2) {
  const m = nums1.length, n = nums2.length
  if (m > n) {
    return findMedianSortedArrays(nums2, nums1)
  }
  const k = Math.ceil((m + n) / 2)
  let l = 0, r = m

  while (l < r) {
    const m1 = Math.floor((l + r) / 2)
    const m2 = k - m1
    if (nums1[m1] < nums2[m2 - 1]) {
      l = m1 + 1
    } else {
      r = m1
    }
  }
  const m1 = l, m2 = k - m1
  const c1 = Math.max(m1 <= 0 ? -Infinity : nums1[m1 - 1],
    m2 <= 0 ? -Infinity : nums2[m2 - 1])
  if ((m + n) % 2 === 1) {
    return c1
  }
  const c2 = Math.min(m1 >= m ? Infinity : nums1[m1],
    m2 >= n ? Infinity : nums2[m2])
  return (c1 + c2) / 2
}
