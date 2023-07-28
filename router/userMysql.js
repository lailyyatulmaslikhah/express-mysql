const express = require("express");
const router = express.Router();
const userMysqlController = require("../controllers/userMysql");

//Menampilkan Data User
router.route("/api/userMysql").get(userMysqlController.getAllUser);
//Menampilkan User byID
router.get("/api/userMysql/:id", userMysqlController.getUserById);
//Menambah User
router.route("/api/userMysql").post(userMysqlController.createUser);

//UPDATE DATA
router.put("/api/userMysql/:id", userMysqlController.updateUser);
//DELETE DATA
router.delete("/api/userMysql/:id", userMysqlController.deleteUser);

module.exports = router;