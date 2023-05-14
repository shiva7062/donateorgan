// const mongoose = require('mongoose');

// const signUpSchema = new mongoose.Schema({
//     username: { type: String, required: true },
//     name: { type: String },
//     phone: { type: String },
//     email: { type: String, required: true },
//     password: { type: String, required: true }
//   });

//   const signUp = mongoose.model('signUp', signUpSchema);

// module.exports = signUp;
const mongoose = require('mongoose');

const signUpSchema = new mongoose.Schema({
    username: { type: String, required: true },
    name: { type: String },
    phone: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' } // new field with default value
});

const signUp = mongoose.model('signUp', signUpSchema);

module.exports = signUp;
