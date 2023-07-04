// Require the express module
const express = require("express");
require("dotenv").config();

// Create a new express application
const app = express();

// The port that the server will listen on
const port = 5000;

// Start the server listening on the specified port
app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
