const resta = require('../prueba5/prueba5');

test('restar 1 - 2 es igual a -1', () => {
  expect(resta(1, 2)).toBe(-1);
});

test('restar 5 - (-4) es igual a 9', () => {
    expect(resta(5, -4)).toBe(9);
  });

  test('restar 5 - 4 es igual a 1', () => {
    expect(resta(5, 4)).toBe(1);
  });

  test('restar -5 - 1 es igual a -6', () => {
    expect(resta(-5, 1)).toBe(-6);
  });

  test('restar -5 - 9 es igual a 9', () => {
    expect(resta(-5, 10)).toBe(-14);
  });