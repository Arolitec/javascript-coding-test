/**
 * Given five positive integers, find the minimum and maximum values that
 * can be calculated by summing exactly four of the five integers.
 * Then return the respective minimum and maximum values in an array
 * of two integers.
 *
 * Example:
 * ```js
 * arr = [1, 3, 5, 7, 9]
 * ```
 * The minimum sum is **1+3+5+7=16**  and the maximum sum is **3+5+7+9=24**.
 * The function returns [16,24]
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
export default function minMaxSum(arr) {
  const sorted = arr.sort((a, b) => a - b)
  const min = sorted.slice(0, 4).reduce((a, b) => a + b)
  const max = sorted.slice(1).reduce((a, b) => a + b)
  return [min, max]
}