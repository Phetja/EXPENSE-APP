const express = require('express');
const cors = require('cors');
const app = express();
const { db } = require('./db/db');
const { readdirSync } = require('fs');
require('dotenv').config();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('123');
});

const PORT = process.env.PORT;

readdirSync('./routes').map((route) =>
  app.use('/api/v1', require('./routes/' + route))
);
const server = () => {
  db();
  app.listen(PORT, () => {
    console.log('You are listening to port', PORT);
  });
};

server();
