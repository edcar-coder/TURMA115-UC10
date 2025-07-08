// isEmpty(valor)
// Verifica se o valor é considerado "vazio".

// Entrada: "" → true
// Entrada: [] → true
// Entrada: null → true
// (Tipo de retorno: boolean)

function isEmpty(valor) {

    if ((Array.isArray(valor) && valor.length===0) || valor === 'undefined' || valor === "" || valor === null ) {
        return true
    }
    return false

}

module.exports = isEmpty;