// Require the express module
const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/db");
const cors = require("cors");
const apiRoutes = require("./routes/apiRoutes");
const cookieParser = require("cookie-parser");
const {
  refreshKrogerAccessToken,
} = require("./services/kroger/refreshKrogerAccessToken");

// Create a new express application
const app = express();

// Retrieves all access tokens and refreshes it before expiring
refreshKrogerAccessToken();

app.use(cookieParser());

dbConnect().catch((err) => console.log(err));

// The port that the server will listen on
const port = 5000;

// Start the server listening on the specified port
app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);
