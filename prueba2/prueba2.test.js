const isLowerCase = require('./prueba2');

test('JAVASCRIPT return false', () => {
  expect(isLowerCase('JAVASCRIPT')).toBe(false);
});

test('JAVASCRIPT return true', () => {
    expect(isLowerCase('JAVASCRIPT')).toBe(true);
});

test('javascript return false', () => {
    expect(isLowerCase('javascript')).toBe(false);
});

test('javascript return true', () => {
    expect(isLowerCase('javascript')).toBe(true);
});

test('javaScript return false', () => {
    expect(isLowerCase('javaScript')).toBe(false);
});


