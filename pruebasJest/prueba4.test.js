const comparar = require('../prueba4/prueba4');

test('java es igual a java  return true', () => {
  expect(comparar('java','java')).toBe(true);
});

test('java es igual a javaScript  return false', () => {
    expect(comparar('java','javaScript')).toBe(false);
});

test('java es igual a javaScript  return false', () => {
    expect(comparar('java','javaScript')).toBe(false);
});

test('JAVA es igual a java  return false', () => {
    expect(comparar('JAVA','java')).toBe(false);
});

test('JAVA es igual a java  return false', () => {
    expect(comparar('JAVA','java')).toBe(false);
});