const isAnagram = require('../src/anagram');

/*

* Anagram Testing file

*/

test('isAnagram function exists', () => {
  // Complete here
  expect(isAnagram).toBeDefined
});

test('"cinema" is an anagram of "iceman"', () => {
  expect(isAnagram('cinema', 'iceman')).toBeTruthy
});

test('"Dormitory" is an anagram of "dirty room##"', () => {
  expect(isAnagram('Dormitory', "dirty room##")).toBeTruthy
});

test('"Hello" is NOT an anagram of "Aloha"', () => {
  expect(isAnagram('Hello', 'Aloha')).toBeFalsy

});

/*

* Various functions Testing file

*/

const functions = require('../src/variousfunctions');

const nameCheck = () => console.log('Checking Name.');

describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test('User is Jeff', () => {
    const user = 'Jeff';
    expect(checkValue(user)).toBe('Jeff')
    //Check if the user is Jeff
    // Complete here
  });

  test('User is Karen', async () => {
    const user = 'Karen';
    expect(checkValue(user)).toBe('Karen')
  });
});

test('Adds 2 + 2 to equal 4', () => {
  expect(add(2, 2)).toEqual(4)
});

test('Adds 2 + 2 to NOT equal 5', () => {
  expect(add(2, 2)).not.toEqual(5)
});

/*

* Informations

*/

// CHECK FOR true & false VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test('Should be null', () => {
  // Complete here
});

// toBeFalsy
test('Should be falsy', () => {
  // Complete here
});

// toEqual
test('User should be Marc Antoine object', () => {
  expect(createUser()).toEqual({ firstName: 'Marc', lastName: 'Antoine' })
});

// Less than and greater than
test('Should be under or equal 1000', () => {
  const load1 = 500;
  const load2 = 1100;
  expect(load1).toBeLessThanOrEqual(1000);
  expect(load2).toBeGreaterThanOrEqual(1000);

});

// Regex
test('There is no I in the word team', () => {
  expect('team').not.toMatch(/i/i)
});

// Arrays
test('Admin should be in usernames', () => {
  usernames = ['john', 'karen', 'admin'];

  expect(usernames).toContain('admin')
  // Complete here
});

// Working with async data

// Async Await since ES7
test('User fetched name should be Leanne Graham', async () => {
  const data = await functions.fetchUser();
  expect(data.name).toBe('Leanne Graham')

  // Complete here
});

/*

* ReverseString Testing file

*/

const reverseString = require('../src/reversestr');
const { checkValue, fetchUser, add, createUser } = require('../src/variousfunctions');

test('reverseString function exists', () => {
  expect(reverseString).toBeDefined
});

test('String reverses', () => {
  expect(reverseString('lola')).toBe('alol')
});

test('String reverses with uppercase', () => {
  expect(reverseString('Lola')).toBe('alol')
});
