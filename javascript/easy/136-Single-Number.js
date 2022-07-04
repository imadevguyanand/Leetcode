/**
 * @param {number[]} nums
 * @return {number}
 * @complexities Time => O(n) | Space => O(1)
 * @description Bit manipulation using XOR
 */
var singleNumber = function (nums) {
  let xor = 0
  for (const num of nums) {
    xor = xor ^ num
  }

  return xor
}

console.log(singleNumber([4, 1, 2, 1, 2]))
// Binary =>     8 4 2 1
// i = 0
// 4 =>          0 1 0 0
// 0 =>          0 0 0 0
// XOR =>        0 1 0 0 => 4
// i = 1
// 1 =>          0 0 0 1
// 4 =>          0 1 0 0
// XOR =>        0 1 0 1 => 5
// i = 2
// 2 =>          0 0 1 0
// 5 =>          0 1 0 1
// XOR =>        0 1 1 1 => 7
// i = 3
// 1 =>          0 0 0 1
// 7 =>          0 1 1 1
// XOR =>        0 1 1 0 => 6
// i = 4
// 2 =>          0 0 1 0
// 6 =>          0 1 1 0
// XOR =>        0 1 0 0 => 4
