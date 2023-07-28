const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = {
    //daftar user baru
    register: async (req, res) => {
        try {
            const { username, password } = req.body;
            //Enkripsi password menggunakan bcrypt 
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new User({ username, password: hashedPassword });
            await user.save();
            res.status(201).json({ message: "User berhasil terdaftar" });
        } catch (error)
         {
            res.status(500).json({ message: "Terjadi kesalahan saat registrasi" });
        } 
    },
    //untuk login user terdaftar 
    login: async (req, res) => {
        try {
            const { username, password } = req.body;
            const user = await User.findOne({ username });
            if (!user) {
                res.status(404).json({ message: "User tidak ditemukan" });
                return;
            }
            // Membandingkan password yang diinput dengan password yang tersimpan dalam database
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                res.status(401).json({ message: "Password salah" });
                return;
            } 
            // Membuat token JWT untuk autentifikasi
            const token = jwt.sign({ userId: user._id}, "rahasia", {
                expiresIn: "1h",
            });
            res.json({ token });
        } catch (error) {
            res.status(500).json({ message: "Terjadi kesalahan saat login" });
        }
        },
    };
