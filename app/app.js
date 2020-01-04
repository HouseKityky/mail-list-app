'use strict';

const express = require('express');

// Constants
const PORT = 3014;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('HELLO FROM OUR WEB APP!\n');
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
