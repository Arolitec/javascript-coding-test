import staircase from '../challenges/staircase'

describe('staircase', () => {
  it('should return a string with the correct number of lines', () => {
    expect(staircase(5)).toBe('    #\n   ##\n  ###\n ####\n#####')
  })

  it('should return a string with the correct number of lines', () => {
    expect(staircase(3)).toBe('  #\n ##\n###')
  })

  it('should return a string with the correct number of lines', () => {
    expect(staircase(1)).toBe('#')
  })

  it('should return a string with the correct number of lines', () => {
    expect(staircase(0)).toBe('')
  })
})