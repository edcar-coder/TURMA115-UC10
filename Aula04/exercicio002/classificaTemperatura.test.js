const classificaTemperatura = require('./classificaTemperatura');

describe('classificaTemperatura', () => {
  test('retorna "Frio" para temperaturas menores que 15', () => {
    expect(classificaTemperatura(10)).toBe("Frio");
    expect(classificaTemperatura(0)).toBe("Frio");
    expect(classificaTemperatura(-5)).toBe("Frio");
  });

  test('retorna "Agradável" para temperaturas entre 15 e 25 (inclusive)', () => {
    expect(classificaTemperatura(15)).toBe("Agradável");
    expect(classificaTemperatura(20)).toBe("Agradável");
    expect(classificaTemperatura(25)).toBe("Agradável");
  });

  test('retorna "Quente" para temperaturas acima de 25', () => {
    expect(classificaTemperatura(26)).toBe("Quente");
    expect(classificaTemperatura(30)).toBe("Quente");
  });
});