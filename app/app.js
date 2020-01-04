'use strict';

const mysql = require('mysql');
const faker = require('faker');
const connection = mysql.createConnection({
  host     : 'db',
  user     : 'root',    
  password : 'password',
  database : 'join_us' 
});
let q;
let data;

function runQuery(q)
{
  connection.query(q, (error, results, field) => {
    if (error) throw error;
    console.log(results);
  });
}

q = 'INSERT INTO users (email, created_at) VALUES ?';
data = [];
for(let i = 0; i < 500; i++){
  data.push([
    faker.internet.email(),
    faker.date.past()
  ]);
}
connection.query(q, [data], (error,results) => {
    if (error) throw error;
    console.log(results);
  });

q = 'SELECT * FROM users LIMIT 50';

runQuery(q);

connection.end();