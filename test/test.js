const isAnagram = require('../src/anagram');


test('isAnagram function exists', () => {
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



const functions = require('../src/variousfunctions');

const nameCheck = () => console.log('Checking Name.');

describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test('User is Jeff', () => {
    const user = 'Jeff';
    expect(checkValue(user)).toBe('Jeff')
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




test('Should be null', () => {
  expect(isNull).toBeNull
});

test('Should be falsy', () => {
  expect(false).toBeFalsy
});

test('User should be Marc Antoine object', () => {
  expect(createUser()).toEqual({ firstName: 'Marc', lastName: 'Antoine' })
});

test('Should be under or equal 1000', () => {
  const load1 = 500;
  const load2 = 1100;
  expect(load1).toBeLessThanOrEqual(1000);
  expect(load2).toBeGreaterThanOrEqual(1000);

});

test('There is no I in the word team', () => {
  expect('team').not.toMatch(/i/i)
});

test('Admin should be in usernames', () => {
  usernames = ['john', 'karen', 'admin'];

  expect(usernames).toContain('admin')
});


test('User fetched name should be Leanne Graham', async () => {
  const data = await functions.fetchUser();
  expect(data.name).toBe('Leanne Graham')

});

const reverseString = require('../src/reversestr');
const { checkValue, fetchUser, add, createUser, isNull } = require('../src/variousfunctions');

test('reverseString function exists', () => {
  expect(reverseString).toBeDefined
});

test('String reverses', () => {
  expect(reverseString('lola')).toBe('alol')
});

test('String reverses with uppercase', () => {
  expect(reverseString('Lola')).toBe('alol')
});
