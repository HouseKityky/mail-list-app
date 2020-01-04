'use strict';

const express = require('express');

// Constants
const PORT = 3014;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('HELLO FROM OUR WEB APP\n');
});

app.listen(PORT, HOST, ()=> {
  console.log(`App running on http://${HOST}:${PORT}`)
    }
);
