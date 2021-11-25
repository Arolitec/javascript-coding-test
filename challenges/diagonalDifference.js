/**
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals.
 * For example, the square matrix  is shown below:
 * ```shell
 * 1 2 3
 * 4 5 6
 * 9 8 9
 * ```
 * The left-to-right diagonal = 1 + 5 + 9 = 15 .
 * The right to left diagonal = 3 + 5 + 9 = 17.
 * Their absolute difference is |15 - 17| = 2.
 *
 * Constraints:
 * -100 <= arr[i][j] <= 100
 *
 * @param {number[][]} arr
 * @param arr
 */
export default function diagonalDifference(arr) {
  let leftToRight = 0
  let rightToLeft = 0
  for (let i = 0; i < arr.length; i++) {
    leftToRight += arr[i][i];
    rightToLeft += arr[i][arr.length - 1 - i]
  }
  return Math.abs(leftToRight - rightToLeft)
}