// /**
//  * @param {number[]} nums
//  * @return {number}
//  * @complexities Time => O(n) | Space => O(1)
//  * @description Linear search
//  */
// var findPeakElement = function (nums) {
//   nums = [-2147483648].concat(nums).concat(-2147483648)
//   let low = 0
//   const length = nums.length
//   while (low < length - 2) {
//     let high = low + 2
//     let mid = low + 1
//     if (nums[mid] > nums[low] && nums[mid] > nums[high]) {
//       return mid - 1
//     } else {
//       low = mid
//     }
//   }

//   return 0
// }

/**
 * @param {number[]} nums
 * @return {number}
 * @complexities Time => O(n) | Space => O(1)
 * @description Linear search
 */
var findPeakElement = function (nums) {
  let low = 0
  let high = nums.length - 1
  while (low < high) {
    let mid = Math.floor((low + high) / 2)
    if (nums[mid] > nums[mid + 1]) {
      high = mid
    } else {
      low = mid + 1
    }
  }
  return low
}

console.log(findPeakElement([1, 2, 3, 1]))
