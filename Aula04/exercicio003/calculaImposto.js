function calculaImposto(renda) {
  if (typeof renda !== 'number' || renda < 0) return null;
  if (renda <= 2000) return 0;
  if (renda <= 5000) return renda * 0.15;
  return renda * 0.275;
}
module.exports = calculaImposto;