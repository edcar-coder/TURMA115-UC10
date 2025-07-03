// isEmpty(valor)
// Verifica se o valor é considerado "vazio".

// Entrada: "" → true
// Entrada: [] → true
// Entrada: null → true
// (Tipo de retorno: boolean)

const isEmpty = require('./questao06');

describe('Testes para a função isEmpty', ()=>{
    test('Testar se retorna true para a entrada ""', ()=>{
        expect(isEmpty("")).toBeTruthy();
    });
    test('Testar se retorna true para a entrada []', ()=>{
        expect(isEmpty([])).toBeTruthy();
    });
    test('Testar se retorna true para a entrada null', ()=>{
        expect(isEmpty(null)).toBeTruthy();
    });
    test('Testar se retorna false para nenhuma entrada', ()=>{
        expect(isEmpty()).toBeFalsy();
    });
    test('Testar se retorna false para uma entrada não vazia', ()=>{
        expect(isEmpty("null")).toBeFalsy();
    });

})

