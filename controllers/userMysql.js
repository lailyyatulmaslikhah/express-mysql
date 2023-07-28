//impor model user dari file userMysql di folder model
const User = require("../models/userMysql");

//Menampilkan semua data user
exports.getAllUser = (req, res) => {
    User.getAll((err, users) => {
        if (err) {
            res.status(500).json({ error: "Gagal Mengambil Data User" });
        } else {
            res.json(users);
        }
    });
};

//POST Menambah User Baru 
exports.createUser = (req, res) => {
    const newUser = req.body;
    User.create(newUser, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Gagal Tambah User" });
        } else {
            res.json({ message: "User baru berhasil ditambahkan"});
        }
    });
};

//GET user by ID
exports.getUserById = (req, res) => {
    const id = req.params.id;
    User.getById(id, (err, user) => {
        if (err) {
            res.status(500).json({ error: "Gagal Mendapatkan User" });
        } else if (!user) {
            res.status(404).json({ error: "User Tidak ditemukan"});
        } else {
           res.json(user); 
        }
    });
};


//PUT update user
exports.updateUser = (req, res) => {
    const id = req.params.id;
    const updatedUser = req.body;
    User.update(id, updatedUser, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Gagal Update User" });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: "User Tidak Ditemukan" });
        } else {
            res.json({ message: "Update User Berhasil" });
        }
    });
};

//DELETE User 
exports.deleteUser = (req, res) => {
    const id = req.params.id;
    User.delete(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Gagal Delete Data User" });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: "User Tidak Ditemukan" });
        } else {
            res.json({ message: "Delete User Berhasil" });
        }
    });
};