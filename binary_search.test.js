const doBinarySearch = require('./binary_search');


test('array with one element that is also a target value', () => {
    expect(doBinarySearch([1], 1)).toBe(0);
});

test('array with one element that is not a target value', () => {
    expect(doBinarySearch([1], 55)).toBe(-1);
});

test('empty array', () => {
    expect(doBinarySearch([], 32)).toBe(-1);
});

test('regular not sorted array with target value', () => {
    expect(doBinarySearch([1, 45, 12, 4, 187], 12)).toBe(2);
});

test('regular not sorted array without target value', () => {
    expect(doBinarySearch([1, 45, 35, 12, 2], 43)).toBe(-1);
});

test('already sorted array with target value', () => {
    expect(doBinarySearch([3, 5, 7, 9, 13, 34], 34)).toBe(5);
});

test('already sorted array with no target value', () => {
    expect(doBinarySearch([3, 45, 56, 100, 245], 1)).toBe(-1);
});

test('already sorted array with duplicates including a target value', () => {
    expect(doBinarySearch([1, 1, 2, 33, 34, 344], 1)).toBe(0);
});
