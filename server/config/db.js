const mongoose = require('mongoose');

async function main() {
  await mongoose
    .connect(process.env.MONGO_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      writeConcern: {
        w: 'majority',
      },
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Error connecting to the database', err));
}

module.exports = main;
