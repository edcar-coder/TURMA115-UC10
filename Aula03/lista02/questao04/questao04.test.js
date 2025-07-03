// 4. mensagemDeBoasVindas(nome)
// Retorna a string "Olá, {nome}! Seja bem-vindo(a)".

// Entrada: "Maria"
// Saída esperada: string contendo "Maria" (tipo: string)
// Deve conter também a palavra "Olá"
const mensagemDeBoasVindas = require('./questao04');

describe('Testes para a função mensagemBoasVindas', () =>{
    test('Testar se exibi corretamente a mensagem de boas-vindas', ()=>{
        expect(mensagemDeBoasVindas('Joel')).toContain('Joel');
        expect(mensagemDeBoasVindas('Joel')).toMatch(/Olá/);
    });
    test('Testar se retorna uma mensagem de erro em relação a parametros incorretos', () =>{
        expect(() =>mensagemDeBoasVindas()).toThrow('Erro ao exibir mensagem.');
        expect(() =>mensagemDeBoasVindas(1)).toThrow('Erro ao exibir mensagem.');
        expect(() =>mensagemDeBoasVindas([])).toThrow('Erro ao exibir mensagem.');
        expect(() => mensagemDeBoasVindas({nome: "Joel"})).toThrow('Erro ao exibir mensagem.');
    })






})