/**
 * 8 POINTS
 *
 * Given a phrase, substitute each character by shifting it up or down
 * the alphabet by a given integer. If necessary, the shifting should
 * wrap around back to the beginning or end of the alphabet.
 *
 * Examples:
 * ```js
 * caesarCipher('middle-Outz', 2) // returns 'okffng-Qwvb'
 * caesarCipher('middle-Outz', -2) // returns 'kgbbjc-Msrx'
 * caesarCipher('I love JavaScript!',100) // returns 'E hkra FwrwOynelp!'
 * ```
 *
 * @param {string} str
 * @param {number} shiftCount
 * @returns {string}
 */
export default function caesarCipher(str, shiftCount) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const shiftedAlphabet =
    alphabet.slice(shiftCount % 26) + alphabet.slice(0, shiftCount % 26)
  const shiftedStr = str.split("").map((char) => {
    const charIndex = alphabet
      .split("")
      .findIndex(
        (alphabetChar) =>
          char === alphabetChar || char === alphabetChar.toUpperCase()
      )
    if (charIndex === -1) {
      return char
    }
    return char.charCodeAt(0) > 90
      ? shiftedAlphabet[charIndex]
      : shiftedAlphabet[charIndex].toUpperCase()
  })
  return shiftedStr.join("")
}
