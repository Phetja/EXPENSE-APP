const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('123');
});

const PORT = process.env.PORT;
const server = () => {
  app.listen(PORT, () => {
    console.log('You are listening to port', PORT);
  });
};

server();
