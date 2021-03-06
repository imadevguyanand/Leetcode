/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}
 */
var merge = function (nums1, m, nums2, n) {
  let count = m + n - 1

  while (m > 0 && n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[count--] = nums1[m - 1]
      m--
    } else {
      nums1[count--] = nums2[n - 1]
      n--
    }
  }

  while (n > 0) {
    nums1[count--] = nums2[n - 1]
    n--
  }

  return nums1
}
