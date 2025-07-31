class usuarioModel{

    static async salvarUsuario(usuario){
        console.log('Salvando user no banco de dados...');
        return {id: 1, ...usuario};
   }

   static async listarUsuario(){
    return [
        {id: 1, nome: "joel", senha:9090},
        {id:2, nome: "Valtemir", senha:8080}
    ]
   }

   static removerUsuario(id){
    return {msg: 'deletado com sucesso'};
   }
}

module.exports = usuarioModel;