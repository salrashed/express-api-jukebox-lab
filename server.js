const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

// import the Art model

const Art = require('./models/art.js');

// import the Art controller

const artRouter = require('./controllers/art');

// Connect to MongoDB

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(cors({origin: 'htpp://localhost:5173'}));

app.use(express.json());

// Routes go here

app.use('/art', artRouter);

app.listen(3001, () => {
  console.log('The express app is ready!');
});