 const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = new sqlite3.Database("users.db");

db.run(`CREATE TABLE IF NOT EXISTS users(
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 email TEXT,
 password TEXT
)`);

app.post("/login",(req,res)=>{
 const {email,password} = req.body;
 app.get("/user",(req, res)=>{
    db.all("SELECT * FROM users",[],(err,row)=>{
        if("err"){
            res.status(500).send("Error retrieving users");
            return;
        }
        res.json(row);// dends all users as json
    });
 }
)

 db.run(
  "INSERT INTO users(email,password) VALUES(?,?)",
  [email,password],
  ()=>{
    res.json({message:"stored"});
  }
 );
});

app.listen(5000,()=>{
 console.log("Server running on http://localhost:5000");
});