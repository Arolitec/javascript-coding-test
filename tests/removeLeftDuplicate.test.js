import removeLeftMostDuplicate from "../challenges/removeLeftMostDuplicate"

describe("removeLeftDuplicate", () => {
  it("should return [4,6,3] when calling removeLeftDuplicate([3,4,4,3,6,3])", () => {
    expect(removeLeftMostDuplicate([3, 4, 4, 3, 6, 3])).toEqual([4, 6, 3])
  })

  it("should return [1,2,3] when calling removeLeftDuplicate([1,2,1,2,1,2,3])", () => {
    expect(removeLeftMostDuplicate([1, 2, 1, 2, 1, 2, 3])).toEqual([1, 2, 3])
  })

  it("should return [4,5,2,1] when calling removeLeftDuplicate([1,1,4,5,1,2,1])", () => {
    expect(removeLeftMostDuplicate([1, 1, 4, 5, 1, 2, 1])).toEqual([4, 5, 2, 1])
  })

  it("should return [1,2,3,4] when calling removeLeftDuplicate([1,2,3,4])", () => {
    expect(removeLeftMostDuplicate([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
  })
})
