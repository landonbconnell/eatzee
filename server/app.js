const express = require('express');
require('dotenv').config();
const dbConnect = require('./config/db');
const cors = require('cors');
const apiRoutes = require('./routes/apiRoutes');
const cookieParser = require('cookie-parser');
const {
  refreshKrogerAccessToken,
} = require('./services/kroger/refreshKrogerAccessToken');

const app = express();

refreshKrogerAccessToken();

app.use(cookieParser());

dbConnect().catch((err) => console.log(err));

const port = 5000;

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

app.use('/api', apiRoutes);
