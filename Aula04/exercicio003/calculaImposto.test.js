const calculaImposto = require('./calculaImposto');

describe('calculaImposto', () => {
  test('renda negativa retorna null', () => {
    expect(calculaImposto(-1)).toBeNull();
  });

  test('entrada não numérica retorna null', () => {
    expect(calculaImposto('abc')).toBeNull();
    expect(calculaImposto(null)).toBeNull();
    expect(calculaImposto(undefined)).toBeNull();
  });

  test('renda até 2000 não paga imposto', () => {
    expect(calculaImposto(0)).toBe(0);
    expect(calculaImposto(1999.99)).toBe(0);
    expect(calculaImposto(2000)).toBe(0);
  });

  test('renda entre 2000,01 e 5000 paga 15%', () => {
    expect(calculaImposto(3000)).toBeCloseTo(450); // 3000 * 0.15
    expect(calculaImposto(5000)).toBeCloseTo(750); // 5000 * 0.15
  });

  test('renda acima de 5000 paga 27,5%', () => {
    expect(calculaImposto(6000)).toBeCloseTo(1650); // 6000 * 0.275
    expect(calculaImposto(10000)).toBeCloseTo(2750); // 10000 * 0.275
  });
});