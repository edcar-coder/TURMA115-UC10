const validaEmail =  require('./questao07');

describe('Testes para validar a função Email', ()=>{
    test('Testar se retorna true para um e-mail valido', ()=>{
        expect(validaEmail('joel@email.com')).toBeTruthy();
    });
    test('Testar se retorna false para um e-mail invalido 01', ()=>{
        expect(validaEmail('joelemail.com')).toBeFalsy();
    });
    test('Testar se retorna false para um e-mail invalido 02', ()=>{
        expect(validaEmail('joel@emailcom')).toBeFalsy();
    });
    test('Testar se retorna false para um e-mail invalido 03', ()=>{
        expect(validaEmail('joelemailcom')).toBeFalsy();
    });
    test('Testar se retorna erro para entradas invalidas', ()=>{
        expect(()=>validaEmail()).toThrow('Não é possivel validar o email');
        expect(()=>validaEmail([])).toThrow('Não é possivel validar o email');
        expect(()=>validaEmail(2)).toThrow('Não é possivel validar o email');
        expect(()=>validaEmail("")).toThrow('Não é possivel validar o email');
    });
   


})