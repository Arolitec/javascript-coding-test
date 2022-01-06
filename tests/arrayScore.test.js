import arrayScore from "../challenges/arrayScore"

describe("[2 points]arrayScore", () => {
  test("should return the correct score of an array of numbers", () => {
    expect(arrayScore([2, 3, 5, 4, 1])).toBe(13)
  })
  test("should return the correct score of an array of numbers", () => {
    expect(arrayScore([5, 5, 5])).toBe(15)
  })

  test("should return the correct score of an array of numbers", () => {
    expect(arrayScore([1, 2, 3, 4, 5])).toBe(13)
  })

  test("should return the correct score of an array of numbers", () => {
    expect(arrayScore([0, 5, 7, 17, 23, 99])).toBe(18)
  })
})
