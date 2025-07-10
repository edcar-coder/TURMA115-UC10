function divideNumeros(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') throw new Error('Entrada inválida');
  if (b === 0) throw new Error('Divisão por zero');
  return a / b;
}
module.exports = divideNumeros;