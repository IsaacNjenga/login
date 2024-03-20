const express = require('express');
const mysql = require('mysql');
const cors = require('cors')

const app = express();
const port = 3001;
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "login"
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.use(express.json());

app.get("/", (req, res) => {
  res.json("Hello from backend");
});

app.get("/login", (req, res) => {
  const query = "SELECT * FROM login";
  db.query(query, (err, data) => {
    if (err) {
      console.error('Error querying login table:', err);
      return res.status(500).json(err);
    }
    res.json(data);
  });
});

app.post("/login", (req, res) => {
  const query = "INSERT INTO login (`username`,`password`) VALUES (?)";
  const values = [
    req.body.username,
    req.body.password,
  ];
  db.query(query, [values], (err, data) => {
    if (err) {
      console.error('Error inserting into login table:', err);
      return res.status(500).json(err);
    }
    res.json("Success");
  });
});

app.get("/login/:username", (req,res) =>
{
    const uname = req.params.username;
    const query = "SELECT * FROM LOGIN where `username` = ?";
    db.query(query, [uname], (err,data) =>
    {
        if(err)
        {
            console.error("Database query error:", err)
            return res.json(err)
        }
        res.json(data);
    });
});

app.listen(port, () => {
  console.log("Listening on port", port);
});
