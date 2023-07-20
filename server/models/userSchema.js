const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  data: {
    type: Object,
    required: false,
    properties: {
      dietaryRestrictions: {
        type: Array,
        required: false,
        items: {
          type: String,
        },
      },
      allergies: {
        type: Array,
        required: false,
        items: {
          type: String,
        },
      },
      skillLevel: {
        type: String,
        required: false,
      },
      equipment: {
        type: Array,
        required: false,
        items: {
          type: String,
        },
      },
    },
  },
});

UserSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
