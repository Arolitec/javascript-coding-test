import switchSwitches from "../challenges/swtchSwitches"

describe("[8 points]switchSwitches", () => {
  it("should return [1] when calling switchSwitches(1)", () => {
    expect(switchSwitches(1)).toEqual([1])
  })

  it("should return [1] when calling switchSwitches(2)", () => {
    expect(switchSwitches(2)).toEqual([1])
  })

  it("should return [1,4] when calling switchSwitches(4)", () => {
    expect(switchSwitches(4)).toEqual([1, 4])
  })

  it("should return [1,4,9] when calling switchSwitches(9)", () => {
    expect(switchSwitches(1)).toEqual([1])
  })
})
