const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  dob: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  aadhaar: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  },
  address2: {
    type: String,
    required: true
  },
  address3: {
    type: String,
    required: true
  },
  pincode: {
    type: Number,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  }
});

const UserDonate = mongoose.model('UserDonate', userSchema);

module.exports = UserDonate;
