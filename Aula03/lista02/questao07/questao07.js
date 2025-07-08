function validaEmail(email){
if(!email || typeof email !== 'string'){
    throw new Error('Não é possivel validar o email');
}
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

return regex.test(email);

}

module.exports = validaEmail;