const mongoose = require('mongoose');
require('dotenv').config();

main().catch((err) => console.log(err));

async function main() {
  await mongoose
    .connect(process.env.MONGO_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Error connecting to the database', err));
}

module.exports = main;
