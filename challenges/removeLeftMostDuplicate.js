/**
 * 6 POINTS
 *
 * Given an array of integers, remove the left most duplicate and return the new array.
 *
 * Examples:
 * ```javascript
 * // Remove the 3's at index 0 and 3
 * // followed by the 4 at index 2
 * removeLeftMostDuplicate([3, 4, 4, 3, 6, 3]) // => [4, 6, 3]
 * ```
 *
 * @param {number[]} arr
 * @return {arr}
 */
export default function removeLeftMostDuplicate(arr) {
  return arr.filter((item, index) => arr.lastIndexOf(item) === index)
}
