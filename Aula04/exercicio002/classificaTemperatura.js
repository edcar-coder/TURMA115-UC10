function classificaTemperatura(temp) {
  if (temp < 15) return "Frio";
  else if (temp <= 25) return "Agradável";
  else return "Quente";
}

module.exports = classificaTemperatura;