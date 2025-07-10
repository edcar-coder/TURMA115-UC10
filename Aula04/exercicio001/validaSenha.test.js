const validaSenha = require('./validaSenha');

describe('validaSenha', () => {
  test('senha válida com letras e números', () => {
    expect(validaSenha('Senha123')).toBe(true);
  });

  test('senha com menos de 8 caracteres', () => {
    expect(validaSenha('S123')).toBe(false);
  });

  test('senha sem números', () => {
    expect(validaSenha('SomenteLetras')).toBe(false);
  });

  test('senha sem letras', () => {
    expect(validaSenha('12345678')).toBe(false);
  });

  test('senha com espaços', () => {
    expect(validaSenha('Senha 123')).toBe(false);
  });

  test('entrada não é string', () => {
    expect(validaSenha(12345678)).toBe(false);
  });
});
