
//validador
function assertEquals(actual, expect, message = ''){
    if(actual !== expect){
        console.error(`❌ Falhou: ${message} - Esperado: ${expect},
        Recebido: ${actual}`)
    }
    console.log(`✌️ Passou: ${message}`);
}

function soma(a, b){
    return a + b;
}
assertEquals(soma(2,2), 5, 'soma de 2+2')
assertEquals(soma(-2,-2), -4, 'soma de numeros negativos')


function multiplicacao(a, b){
    return a * b;
}
assertEquals(multiplicacao(2,20), 40, 'multiplicacao 2*40')

function numeroPar(numero) {
    return numero % 2 === 0;
}
console.log(numeroPar(4));

