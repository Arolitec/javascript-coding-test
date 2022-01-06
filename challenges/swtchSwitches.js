/**
 * 8 POINTS
 *
 * Bernard Kouadio is a custodian at a local data center.
 * As he suspected, Bernard recently found out he is to be fired on his birthday
 * after years of pouring his soul into maintaining the facility. Bobsworth, however, has other plans.
 *
 * Bernard knows there are 1 to n switches in the breaker box of the data center.
 * Moving from switch 1 to n, Bernard first flips every switch off. Beginning from the first switch again,
 * Bernard then flips every 2nd switch. Once again starting from the first switch,
 * Bernard then flips every 3rd switch. Bernard continues this pattern until he flips every nth switch & makes n passes.
 *
 * At the end of Kouadio's mayhem, how many switches are turned off?
 *
 * The function should return an ascending array containing all of
 * the switch numbers that remain off after Bernard completes his revenge
 *
 * Examples:
 * ```javascript
 * switchSwitches(1) // => [1]
 * switchSwitches(1) // => [1]
 * switchSwitches(4) // => [1,4]
 * switchSwitches(9) // => [1,4,9]
 * ```
 *
 * @param {number} switchesCount
 * @return {arr}
 */
export default function switchSwitches(switchesCount) {
  let switchesArr = Array(switchesCount).fill(false)

  for (let step = 1; step <= switchesCount - 1; step++) {
    for (let j = step; j < switchesCount; j += step + 1) {
      switchesArr[j] = !switchesArr[j]
    }
  }

  return switchesArr
    .map((s, index) => (s ? null : index + 1))
    .filter((item) => !!item)
}
