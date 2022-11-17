//import packages for server
const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');

//express app initialization
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//variables
const port = process.env.PORT || 5000;
const db = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017';

//routes
app.use('/api/user', userRoutes);

//connect to db
mongoose
  .connect(db)
  .then(() => {
    //listen for requests
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
