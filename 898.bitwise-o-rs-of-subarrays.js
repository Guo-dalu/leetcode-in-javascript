/*
 * @lc app=leetcode id=898 lang=javascript
 *
 * [898] Bitwise ORs of Subarrays
 * trick在于缩减current的size，通过去重来优化
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var subarrayBitwiseORs = function (A) {
  if (A.length <= 1) {
    return A.length
  }
  const result = []
  let current = []
  for (let i = 0; i < A.length; i++) {
    const next = new Set()
    next.add(A[i])
    for (let j = 0; j < current.length; j++) {
      next.add(A[i] | current[j])
    }
    current = [...next]
    result.push(...current)
  }
  return new Set(result).size
}


/*
 * 通过动态控制result的起止来获取current，取了s的某一段

var subarrayBitwiseORs = function(A) {
    const s = [];
    let counter = 0
    for (let i = 0; i < A.length; i++) {
         const tempLength = s.length;
         s.push(A[i]);

        while (counter < tempLength) {  // counter动态增长，每次等于上一轮的s.length
            const v = s[counter] | A[i];
            if (v !== s[s.length - 1]) s.push(v);
            // 就等于每次v和末尾比较的时候 ，是A[i]A[i+1]...A[j] 和 A[i-1]A[i]A[i+1]...A[j]比较，是找的一轮中最接近v的一个值来优化的
            counter++
        }
    }
    return new Set(s).size;
};

*/

// @lc code=end
