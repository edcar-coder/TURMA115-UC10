
const sum = require('../modules/sum');

describe('Testes basicos da função soma', () => {
    test('Verificar a soma de numeros positivos', () => {
        expect(sum(8, 8)).toBe(16);
    });
    test('verificar a soma de numeros negativos', () => {
        expect(sum(-8, 8)).toBe(0);
    })

    test('Verificar a soma de numeros com texto', () => {
        expect(sum(-8, "8")).toBe("Erro, não é possivel realizar a soma");
    });
    test('Verificar a soma de numeros com array', () => {
        expect(sum(-8, [8])).toBe("Erro, não é possivel realizar a soma");
    });    
})