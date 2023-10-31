const suma = require('./prueba1');

test('sumar 1 + 2 es igual a 3', () => {
  expect(suma(1, 2)).toBe(3);
});


test('sumar -3 + 2 es igual a -1', () => {
    expect(suma(-3, 2)).toBe(-1);
});

test('sumar 3.5 + 3.5 es igual a 7', () => {
    expect(suma(3.5, 3.5)).toBe(7);
});

test('sumar 3.5 + 3.5 es igual a 7', () => {
    expect(suma(3.5, 3)).toBe(6.5);
});

test('sumar 3.5 + 3.5 es igual a 7', () => {
    expect(suma(-3.5, 3.5)).toBe(0);
});