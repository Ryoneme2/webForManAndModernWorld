const mysql = require('mysql')
const express = require('express')
const app = express()
const cors = require('cors')

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "manandmodernworld"
})

conn.connect((err) => {
    if (!!err) {
      console.log(err)  
    } else {
        console.log('connected')
    }
})


app.use(cors());
app.use(express.json());

app.post('/getdata', (req, res) => {
     const name = req.body.name
     const comment = req.body.comment
     console.log(name)
     console.log(comment)
     conn.query(`INSERT INTO data (Name,Comment) VALUES ('${name}','${comment}')`,
     (err, result) => {
        err ? console.log(err) : console.log('inserted');
     });
})

app.get('/showdata', (req, res) => {
    conn.query("SELECT * FROM data", (err, result) => {
        err ? console.log(err) : res.send(result);

    })
})

app.listen('3001', () => {
    console.log('server running on port 3001');
})