function volumeDoCubo(aresta) {
    if (typeof aresta !== 'number' || aresta < 0) {
        return "Erro: valor inválido para a aresta";
    }
    return aresta ** 3;
}

module.exports = volumeDoCubo;