const volumeDoCubo = require('../modules/cubo');

describe('Volume do Cubo - Cálculos válidos', () => {
    test('Calcula corretamente para valor inteiro', () => {
        expect(volumeDoCubo(3)).toBe(27);
    });

    test('Calcula corretamente para valor decimal', () => {
        expect(volumeDoCubo(2.5)).toBeCloseTo(15.625);
    });
});

describe('Volume do Cubo - Valores inválidos (0 ou negativos)', () => {
    test('Exibe erro para valor 0', () => {
        expect(volumeDoCubo(0)).toBe("Erro: valor inválido para a aresta");
    });

    test('Exibe erro para valor negativo', () => {
        expect(volumeDoCubo(-5)).toBe("Erro: valor inválido para a aresta");
    });
});


describe('Volume do Cubo - Tipos inválidos de entrada', () => {
    test('Exibe erro para string', () => {
        expect(volumeDoCubo("3")).toBe("Erro: valor inválido para a aresta");
    });

    test('Exibe erro para array', () => {
        expect(volumeDoCubo([3])).toBe("Erro: valor inválido para a aresta");
    });

    test('Exibe erro para objeto', () => {
        expect(volumeDoCubo({ aresta: 3 })).toBe("Erro: valor inválido para a aresta");
    });

    test('Exibe erro para valor undefined', () => {
        expect(volumeDoCubo(undefined)).toBe("Erro: valor inválido para a aresta");
    });

    test('Exibe erro para valor null', () => {
        expect(volumeDoCubo(null)).toBe("Erro: valor inválido para a aresta");
    });
});

