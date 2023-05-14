const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'], required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  aadhaar: { type: String, required: true },
  address: { type: String, required: true},
    // addLine1: { type: String, required: true },
    // addLine2: { type: String, required: true },
    // addLine3: { type: String },
    // pincode: { type: String, required: true },
    // city: { type: String, required: true },
    // state: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
});

const UserRequest = mongoose.model('UserRequest', userSchema);

module.exports = UserRequest;
