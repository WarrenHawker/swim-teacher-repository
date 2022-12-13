const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;
const db = process.env.DB || 'mongodb://localhost:27017';

app.use(express.json());
app.use(cors());
mongoose.set('strictQuery', true);

mongoose
  .connect(db)
  .then(() => {
    app.listen(port, () => {
      console.log(`server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
