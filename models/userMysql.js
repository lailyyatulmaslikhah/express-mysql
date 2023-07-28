//impor modu; connection dari file database.js
//untuk membuat koneksi dengan database
// const { connection } = require("mongoose");
const connection = require("../database");

//Buat objek kosong untuk User
const User = {};

User.getAll = (callback) => {
    connection.query("SELECT * FROM users", callback);
};

User.getById = (id, callback) => {
    connection.query("SELECT * FROM users WHERE id = ?", [id], callback);
};
User.create = (newUser, callback) => {
    connection.query("INSERT INTO users SET ?", newUser, callback);
};

User.update = (id, updateUser, callback) => {
    connection.query(
        "UPDATE users SET ? WHERE id = ?",
        [updateUser, id],
        callback
    );
};

User.delete = (id, callback) => {
    connection.query("DELETE FROM users WHERE id = ?", [id], callback);
};

module.exports = User;