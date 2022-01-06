/**
 * 3 POINTS
 *
 * This is a staircase of size _n=4_:
 * ```shell
 *    #
 *   ##
 *  ###
 * ####
 * ```
 * Its base and height are both equal to _n_.
 * It is drawn using # symbols and spaces. The last line is not preceded by any spaces.
 * Write a program that prints a staircase of size _n_.
 *
 * Constraints:
 * 0 < n <= 100
 *
 * @param {number} n
 * @returns {string}
 */
export default function staircase(n) {
  let result = ""
  for (let i = 0; i < n; i++) {
    result +=
      " ".repeat(n - i - 1) + "#".repeat(i + 1) + `${i === n - 1 ? "" : "\n"}`
  }
  return result
}
