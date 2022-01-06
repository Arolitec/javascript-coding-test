import caesarCipher from "../challenges/caesarCipher"

describe("[8 points]caesarCipher", () => {
  it('caesarCipher("middle-Outz", 2) should return "okffng-Qwvb"', () => {
    expect(caesarCipher("middle-Outz", 2)).toBe("okffng-Qwvb")
  })
  it('caesarCipher("middle-Outz", -2) should return "dengg-Ywuk"', () => {
    expect(caesarCipher("middle-Outz", -2)).toBe("kgbbjc-Msrx")
  })
  it('caesarCipher("I love JavaScript!", 100) should return a "E hkra FwrwOynelp!"', () => {
    expect(caesarCipher("I love JavaScript!", 100)).toBe("E hkra FwrwOynelp!")
  })
  it('caesarCipher("I love JavaScript!", 100) should return a "I love JavaScript!"', () => {
    expect(caesarCipher("I love JavaScript!", 0)).toBe("I love JavaScript!")
  })
})
