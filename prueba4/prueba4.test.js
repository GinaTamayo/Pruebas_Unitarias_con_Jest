const comparar = require('./prueba4');

test('java es igual a java  return true', () => {
  expect(comparar('java','java')).toBe(true);
});

test('java es igual a javaScript  return true', () => {
    expect(comparar('java','javaScript')).toBe(true);
});

test('java es igual a javaScript  return true', () => {
    expect(comparar('java','javaScript')).toBe(false);
});

test('JAVA es igual a java  return true', () => {
    expect(comparar('JAVA','java')).toBe(true);
});

test('JAVA es igual a java  return true', () => {
    expect(comparar('JAVA','java')).toBe(false);
});