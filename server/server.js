const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');
const entryRoutes = require('./routes/entryRoutes');

const app = express();

const port = process.env.PORT || 5000;
const db = process.env.DB || 'mongodb://localhost:27017';

app.use(express.json());
app.use(cors());
mongoose.set('strictQuery', true);

app.use('/api/user', userRoutes);
app.use('/api/entries', entryRoutes);

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
