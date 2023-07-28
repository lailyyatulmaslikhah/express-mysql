const express = require("express");
const router = express.Router();
//import file controller nilai
const nilaiMysqlController = require("../controllers/Nilai");

//Route untuk menampilkan nilai (get) dan menambahkan nilai(post)
router
.route("/api/nilai")
.get(nilaiMysqlController.getAllNilai)
.post(nilaiMysqlController.createNilai);

//Route Tampilkan semua mahasiswa dengan nilainya 
router.get("/api/nilaimhs", nilaiMysqlController.getAllNilaiMhs);
//Tampilkan nilai berdasarkan Id
router.get("/api/nilai/:id", nilaiMysqlController.getById);

//UPDATE NILAI
router.put("/api/nilai/:id", nilaiMysqlController.updateNilai);

//DELETE NILAI  
router.delete("/api/nilai/:id", nilaiMysqlController.deleteNilai);

module.exports = router;