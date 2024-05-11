const mySql = require("./user-dao")


/* Adicionar dados */

let user = [
    { login: 'salaminho', senha: 'salaminho1234', email: 'salaminho@gmail.com' },
    { login: 'junin', senha: 'junin4002', email: 'junin1234@gmail.com' },
    { login: 'pedrin', senha: 'pedringameplays1234', email: 'pedrinGM@gmail.com' },
    { login: 'kakaroto', senha: 'kakaroto59', email: 'kakaroto@gmail.com' },
    { login: 'Robson', senha: 'Robson999', email: 'robsonps2@gmail.com' }
]

for (let i = 0; i < user.length; i++) {
    mySql.addUser(user[i], (error, result) => {
        if (error) {
            console.error("Erro ao adicionar usuário:", error);
        } else {
            console.log("Usuário adicionado com sucesso. ID:", result);
        }
    });
}

/* mostrar todos os dados */

mySql.getAllUsers((error, result) => {
    if (error) {
        console.error("Erro ao procurar os usuários:", error);
    } else {
        console.log("Usuários encontrados com sucesso. ID:", result);
    }
});

/* Mostrar dados pelo id */

mySql.getUserById(4, (error, result) => {
    if (error) {
        console.error("Erro ao procurar o usuário especificado:", error);
    } else {
        console.log("Usuário encontrado com sucesso.", result);
    }
});


/* Alterar dados */

const setNome = { login: 'goku' }
const setSenha = { senha: '1234' }
const setEmail = { email: 'goku@outlook.com' }

mySql.updateUser(4, setNome, (error, result) => {
    if (error) {
        console.error("Erro ao atualizar usuário:", error);
    } else {
        console.log("Usuário atualizado com sucesso.");
    }
});

/* Apagar dados */

mySql.deleteUser(4, (error, result) => {
    if (error) {
        console.error("Erro ao deletar usuário:", error);
    } else {
        console.log("Usuário deletado com sucesso.", result);
    }
});
