function verificaIntervalo(n) {
  if (typeof n !== 'number') return false;
  return n >= 10 && n <= 20;
}
module.exports = verificaIntervalo;