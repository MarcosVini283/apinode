const connection = require('./database'); // chama os modulos do database para cá, faz rodar o database.js

function getAllUsers(callback) { // pega todos os usuarios do DB
    connection.query('SELECT * FROM users', (error, results, fields) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, results);
        }
    });
}

function getUserById(id, callback) { // pega os usuarios pelo ID do parametro
    connection.query('SELECT * FROM users WHERE id = ?', [id], (error, results, fields) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, results[0]);
        }
    });
}

function addUser(user, callback) { // adiciona os usuarios
    connection.query('INSERT INTO users SET ?', user, (error, results, fields) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, results.insertId);
        }
    });
}

function updateUser(id, user, callback) { // atualiza dados dos usuarios pegando pelo seu ID
    connection.query('UPDATE users SET ? WHERE id = ?', [user, id], (error, results, fields) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, results.affectedRows); // mostra linhas atualizadas
        }
    });
}

function deleteUser(id, callback) { // apagar usuario pelo ID
    connection.query('DELETE FROM users WHERE id = ?', [id], (error, results, fields) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, results.affectedRows); // mostra linhas apagadas
        }
    });
}

module.exports = { // exporta os modulos do CRUD, podendo usa-los em qualquer lugar do documento
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
};

// callback : função que chama a si mesma (chama de volta, parece a recursividade) | faz parte do Design Patterns (coisa de senior OMG!)
// => (arrow function) : ele substituiu o function na primeira função, é outra forma de fazer