import minMaxSum from '../challenges/minMaxSum'

describe('minMaxSum', () => {
  test('minMaxSum([1, 3, 5, 7, 9]) should return [16, 24]', () => {
    expect(minMaxSum([1, 3, 5, 7, 9])).toEqual([16, 24])
  })
  test('minMaxSum([1,2,3,4,5]) should return [10, 14]', () => {
    expect(minMaxSum([1, 2, 3, 4, 5])).toEqual([10, 14])
  })
  test('minMaxSum([5,5,5,5,5]) should return [20, 20]', () => {
    expect(minMaxSum([5, 5, 5, 5, 5])).toEqual([20, 20])
  })
  test('minMaxSum([2,10,6,8,5]) should return [21, 29]', () => {
    expect(minMaxSum([2, 10, 6, 8, 5])).toEqual([21, 29])
  })
})