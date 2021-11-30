var database = require("../database/config")



function entrar(nickname, senha) {
    console.log("ACESSEI O LOGIN MODEL")
    var instrucao = `
    SELECT * FROM cadastro WHERE nickname = '${nickname}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

function cadastrar(nickname, senha, email, fkjogofavorito) {
    console.log("ACESSEI O CADASTRO MODEL");
    var instrucao = `
        INSERT INTO cadastro (nickname, senha, email, fkjogofavorito) VALUES ('${nickname}', '${senha}', '${email}', ${fkjogofavorito});
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}
function listar(){
    console.log("ACESSEI A CADASTRO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT 
        count (idcadastro) as quantidadedejogadores
        From cadastro`;
        return database.executar(instrucao);
}




module.exports = {
    entrar,
    cadastrar,
    listar
};