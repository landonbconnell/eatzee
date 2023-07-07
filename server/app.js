// Require the express module
const express = require('express');
const dbConnect = require('./config/db');
const cors = require('cors');
require('dotenv').config();

// Create a new express application
const app = express();

dbConnect().catch((err) => console.log(err));

// The port that the server will listen on
const port = 5000;

// Start the server listening on the specified port
app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.use(express.json());
