const divideNumeros = require('./divideNumeros');

describe('divideNumeros', () => {
  test('divide dois números corretamente', () => {
    expect(divideNumeros(10, 2)).toBe(5);
    expect(divideNumeros(-6, 3)).toBe(-2);
    expect(divideNumeros(0, 5)).toBe(0);
  });

  test('lança erro se entrada não for número', () => {
    expect(() => divideNumeros('10', 2)).toThrow('Entrada inválida');
    expect(() => divideNumeros(10, '2')).toThrow('Entrada inválida');
    expect(() => divideNumeros(null, 2)).toThrow('Entrada inválida');
    expect(() => divideNumeros(10, undefined)).toThrow('Entrada inválida');
  });

  test('lança erro ao dividir por zero', () => {
    expect(() => divideNumeros(10, 0)).toThrow('Divisão por zero');
    expect(() => divideNumeros(-5, 0)).toThrow('Divisão por zero');
  });
});