const dividir = require('../prueba3/prueba3');

test('15/3  es igual a 5', () => {
  expect(dividir(15,3)).toBe(5);
});

test('-15/3  es igual a 5', () => {
    expect(dividir(-15,3)).toBe(-5);
});

/*test('15/3  es igual a 5', () => {
    expect(dividir(-15.3,3)).toBe(-5.1);
});*/

/*test('3/15 es igual a 5', () => {
    expect(dividir(3,15)).toBe(0.2);
});*/

test('15/0  es igual a "no se puede dividir por cero', () => {
    expect(dividir(15,0)).toBe('no se puede dividir por cero');
});

test('10/0  es igual a "no se puede dividir por cero', () => {
    expect(dividir(15,0)).toBe(false);
});