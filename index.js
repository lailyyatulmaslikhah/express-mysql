const express =require('express')
const app = express();
//import library CORS
const cors = require('cors')
const userRouter = require("./router/user")
const userMysql = require("./router/userMysql");
const nilaiMysql = require("./router/nilai");
const connection = require("./database");


//Aktifkan /tambahkan setting default  untuk req.body
app.use(express.json()) //For parsing application json
app.use(express.urlencoded({ extended: true })) //for parsing application/x-www-form-urlenconded
app.use(nilaiMysql);
//use cors Gunakan middleware CORS sebelum menangani rute atau endpoint lainnya.
app.use(cors());
app.use(userRouter);
app.use(userMysql);

//Membuat koneksi dengan database menggunakan MYSQL
//const connection = require("./database");

//Membuat koneksi dengan database menggunakan mongoose
//const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017").then((data)=>{
//     console.log('MongoDB Connected with Server $(data.connection.host)')
// })
// MONGODB
// mongoose
// .connect("mongodb://127.0.0.1:27017/lail_db", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
    
// })
// .then(() => {
//     console.log("Connected to MongoDB");
// })
// .catch((error) => {
//     console.error("MongoDB connection error:", error);
// });

// app.get('/', function(request, respon){
//     respon.send('Hello!! Mysql')
// })

  app.listen(5000, function(){
     console.log('server berjalan lancar')
 });



