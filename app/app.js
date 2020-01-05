'use strict';

const express = require('express');
const mysql = require('mysql');

// Constants
const PORT = 3014;
const HOST = '0.0.0.0';

// App
const app = express();
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
    res.send(`We have ${count} users in our db`);
  });
});

app.get('/joke', (req, res) => {
  let joke = "joke test";
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
