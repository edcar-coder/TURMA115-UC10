const verificaIntervalo = require('./verificaIntervalo');

describe('verificaIntervalo', () => {
  test('retorna false para entrada não numérica', () => {
    expect(verificaIntervalo('15')).toBe(false);
    expect(verificaIntervalo(null)).toBe(false);
    expect(verificaIntervalo(undefined)).toBe(false);
    expect(verificaIntervalo({})).toBe(false);
  });

  test('retorna true para valores dentro do intervalo [10, 20]', () => {
    expect(verificaIntervalo(10)).toBe(true);
    expect(verificaIntervalo(15)).toBe(true);
    expect(verificaIntervalo(20)).toBe(true);
  });

  test('retorna false para valores fora do intervalo', () => {
    expect(verificaIntervalo(9.99)).toBe(false);
    expect(verificaIntervalo(21)).toBe(false);
    expect(verificaIntervalo(-5)).toBe(false);
    expect(verificaIntervalo(100)).toBe(false);
  });
});