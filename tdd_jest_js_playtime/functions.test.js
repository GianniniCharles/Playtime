const functions = require('./functions');

test('Add 2+2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Add 2+2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test('Result should be null', () => {
  expect(functions.isNull()).toBeNull();
});

/* CHECK FOR TRUTHY & FALSY VALUES
toBeNull matches only null
toBeUndefined matches only undefined
toBeDefined is the opposite of toBeUndefined
toBeTruthy matches anything that an if statement treats as true.

*/