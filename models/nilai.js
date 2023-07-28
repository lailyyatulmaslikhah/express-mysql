const connection = require("../database");

const Nilai = {};
//Tampilkan Semua Nilai 
Nilai.getAll = (callback) => {
    connection.query("SELECT * FROM nilai", callback);
};

//Tampilkan semua data mahasiswa beserta nilai
Nilai.getNilaiMhs = (callback) => {
    const query = `SELECT nilai.id,users.name,nilai.kdMk,matkul.matakuliah,nilai.dosen,
    nilai.semester,nilai.nilai FROM users JOIN matkul JOIN nilai ON nilai.id=users.id AND
    nilai.kdMk=matkul.kdMk`;
    connection.query(query, callback);
};
//Tampilkan Data Nilai berdasarkan Id
Nilai.getByIdNilai = (id, callback) => {
    const query = `SELECT nilai.id,users.name,nilai.kdMk,matkul.matakuliah,nilai.dosen,
    nilai.semester,nilai.nilai FROM users JOIN matkul JOIN nilai ON nilai.id=users.id AND 
    nilai.kdMk=matkul.kdMk WHERE nilai.id= ?`;
    connection.query(query, [id], callback);
};

//Tambahkan data Nilai Baru
Nilai.create = (newNilai, callback) => {
    connection.query("INSERT INTO nilai SET ?", newNilai, callback);
};

//Update Nilaiconnection.query(
    Nilai.update = (id, updateNilai, callback) => {
        connection.query(
            "UPDATE nilai SET ? WHERE id = ?",
            [updateNilai, id],
            callback
        );
    };
    

//DELETE Nilai
Nilai.delete = (id, callback) => {
    connection.query("DELETE FROM nilai WHERE id = ?", [id], callback);
};

module.exports = Nilai;