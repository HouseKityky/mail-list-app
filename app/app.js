'use strict';

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

// Constants
const PORT = 3014;
const HOST = '0.0.0.0';

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

// App
const connection = mysql.createConnection({
  host     : 'db',
  user     : 'root',
  password : 'password',
  database : 'join_us'
});

app.get('/', (req, res) => {
  let q = "SELECT COUNT(*) AS count FROM users";
  connection.query(q, (err, results)=>{
    if(err) throw err;
    let count = results[0].count;
    // res.send(`We have ${count} users in our db`);
    res.render("home", {count: count});
  });
});

app.post("/register", (req, res)=>{
  let person = {
    email: req.body.email
  };
  connection.query('INSERT INTO users SET ?', person, (err, result)=>{
    if (err) throw err;
    res.redirect("/");
  });
});

app.get('/joke', (req, res) => {
  let joke = "<strong>What do you call a dog that does magic tricks?</strong> <em>A labracadabrador</em>.";
  res.send(joke);
  console.log('joke page');
});

app.get('/random_num', (req, res) => {
  let num = Math.floor(Math.random() * 10) + 1;
  res.send(`Your lucky number is ${num}`);
});

app.listen(PORT, HOST, ()=> {
  console.log(`App running on http://${HOST}:${PORT}`)
    }
);