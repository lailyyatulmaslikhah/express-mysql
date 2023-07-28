//Impor file Nilai dari model 
const Nilai = require("../models/nilai");

//Menampilkan semua Nilai
exports.getAllNilai = (req, res) => {
    Nilai.getAll((err, nilai) => {
        if (err) {
            res.status(500).json({ error: "Gagal Mengambil Data Nilai" });
        } else {
            res.json(nilai);
        }
    });
};

//Menampilkan semua mahasiswa dengan nilainya 
exports.getAllNilaiMhs = (req, res) => {
    Nilai.getNilaiMhs((err, nilai) => {
        if (err) {
            res.status(500).json({ error: "Gagal Mengambil Data Nilai" });
        } else {
            res.json(nilai);
        }
    });
};
//Menampilkan Nilai ById
exports.getById = (req, res) => {
    const id = req.params.id;
    Nilai.getByIdNilai(id, (err, nilai) => {
        if (err) {
            res.status(500).json({ error: "Gagal Mendapatkan Nilai" });
        } else if (!nilai) {
            res.status(404).json({ error: "Nilai tidak ditemukan" });
        } else {
            res.json(nilai);
        }
    });
};

//Tambahkan Nilai
exports.createNilai = (req, res) => {
    const newNilai = {
        id: req.body.id,
        kdMk: req.body.kdMk,
        dosen: req.body.dosen,
        semester: req.body.semester,
        nilai: req.body.nilai,
    };
    Nilai.create(newNilai, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Gagal Tambah Nilai" });
        } else {
            res.json({ message: "Nilai baru berhasil ditambahkan" });
        }
    });
};

//Update Nilai
exports.updateNilai = (req, res) => {
    const id = req.params.id;
    const updateNilai = req.body;
    Nilai.update(id, updateNilai, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Gagal Update Nilai" });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: "Nilai Tidak Ditemukan" });
        } else {
            res.json({ message: "Update Nilai Berhasil" });
        }
    });
};

//Delete Nilai
exports.deleteNilai = (req, res) => {
    const id = req.params.id;
    Nilai.delete(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Gagal Delete Data Nilai" });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: "Nilai Tidak Ditemukan" });
        } else {
            res.json({ message: "Delete Nilai Berhasil" });
        }
    });
};