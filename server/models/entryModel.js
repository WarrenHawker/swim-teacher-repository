const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const entrySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    stroke: {
      type: String,
    },
    stages: {
      type: Array,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    teachingPoints: {
      type: Array,
    },
    type: {
      //exercise or tip
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Entries', entrySchema);
