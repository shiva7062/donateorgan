const express = require('express');
const cors = require('cors');
const app = express();
const userForm = require('./models/donateUserForm');
const signUp = require('./models/signUp');
const userRequest = require('./models/RequestUserForm');
const mongoose = require('mongoose');
const organform = require('./models/donateorganinfo');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secert = bcrypt.genSaltSync(10);
// Allow all origins to access your server
app.use(cors({credentials: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Connect to Mongoose
mongoose.connect('mongodb+srv://shiva200000:Shiva7062@cluster0.mu7r7lu.mongodb.net/',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));


// Set up your routes here



//User register

app.post('/signup',async (req,res)=>{
  console.log(req.body);
  const {username, name, phone, email, password}=req.body;
  try{
    const newsignUp = new signUp({  
      username,
      name,
      phone,
      email,
      password });
    await newsignUp.save();
    console.log('User saved to database');
    res.send('User saved to database');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error saving user to database');
    // Add this line to log the validation error message
    console.log(error.message);
  }
})

//Login 
app.post('/login', async (req, res) => {
 
  try {
    const { username, password } = req.body;
    const userDoc = await signUp.findOne({ username });

    if (!userDoc) {
      return res.status(400).json('User not found');
    }

    if (password === userDoc.password) {
      console.log(req.body);
      jwt.sign({ username, id: userDoc._id }, secert, {}, (err, token) => {
        if (err) throw err;
        res.cookie('token', token).json({
          id: userDoc._id,
          username,
          // role: userDoc.role,
        });
      });
    } else {
      res.status(400).json('Wrong credentials');
    }
  } catch(err) {
    res.status(400).json('Wrong credentials');
  }
});

//Donate form 1
app.post('/donate1', async (req, res) => {
  console.log(req.body);
  const {  firstname,
  lastname,
  phone,
  email,
  dob,
  gender,
  height,
  weight,
  aadhaar,
  address,
  address2,
  address3,
  pincode,
  city,
  state } = req.body;
  try {
    const newUserForm = new userForm({  firstname,
      lastname,
      phone,
      email,
      dob,
      gender,
      height,
      weight,
      aadhaar,
      address,
      address2,
      address3,
      pincode,
      city,
      state });
    await newUserForm.save();
    console.log('User saved to database');
    res.send('User saved to database');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error saving user to database');
    // Add this line to log the validation error message
    console.log(error.message);
  }
});

//donate form 2

app.post('/donate2', async (req, res) => {
  const { donate,
     details,
      select,
       organs,
        blood,
       } = req.body;
  try {
    const neworganform = new organform({
      donate,
      details,
      select,
      organs,
      blood,
    });
    await neworganform.save();
    console.log('User saved to database');
    res.send('User saved to database');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error saving user to database');
  }
});

//Request form
app.post('/request', async (req, res) => {
  console.log(req.body);
  const {  firstname,
  lastname,
  phone,
  email,
  dob,
  gender,
  height,
  weight,
  aadhaar,
  address,
  address2,
  address3,
  pincode,
  city,
  state } = req.body;
  try {
    const newUserForm = new userRequest({  firstname,
      lastname,
      phone,
      email,
      dob,
      gender,
      height,
      weight,
      aadhaar,
      address,
      address2,
      address3,
      pincode,
      city,
      state });
    await newUserForm.save();
    console.log('User saved to database');
    res.send('User saved to database');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error saving user to database');
    // Add this line to log the validation error message
    console.log(error.message);
  }
});






app.listen(4000, () => {
  console.log('Server started on port 4000');
});