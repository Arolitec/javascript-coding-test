import diagonalDifference from '../challenges/diagonalDifference'

describe('diagonalDifference', () => {
  test('it should return matrix\'s diagonal absolute difference', () => {
    expect(diagonalDifference([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ])).toBe(2)
  })
  test('it should return matrix\'s diagonal absolute difference', () => {
    expect(diagonalDifference([
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12]
    ])).toBe(15)
  })
  test('it should return matrix\'s diagonal absolute difference', () => {
    expect(diagonalDifference([
      [1, 2, 3],
      [4, 5, 6],
      [9, 8, 9]
    ])).toBe(2)
  })
  test('it should return matrix\'s diagonal absolute difference', () => {
    expect(diagonalDifference([
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ])).toBe(0)
  })

})


