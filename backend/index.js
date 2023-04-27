// This is the start of our express app. We are importing express, mongoose, dotenv and cors, and initializing our app with express.

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const bodyparser = require('body-parser');
const authController = require('./controllers/authController');
const propertyController = require('./controllers/propertyController');
const uploadController = require('./controllers/uploadController');
const app = express();


//mongodb connect 
mongoose.set('strictQuery', false) // This line of code turns off strict query mode for mongoose. This will allow mongoose to use non-standard query syntax.
const dbConnection = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
      console.log('MongoDB has started successfully');
    } catch (error) {
      console.error(error);
    }
  };
  dbConnection();

  app.use('/images', express.static('public/images'))

  //routes & middleware
  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({extended: true}));
  app.use(bodyparser.json({ type: 'application/vnd.api+json' }));
  app.use(cors());
  app.use("/auth", authController);
  app.use("/property", propertyController);
  app.use("/upload", uploadController);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server started successfully')); //Start the server on the specified port 
