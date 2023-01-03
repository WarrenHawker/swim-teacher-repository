//imports
const Entries = require('../models/entryModel');
const mongoose = require('mongoose');

//get all entries

//get single entry

//add new entry
const createNewEntry = async (req, res) => {
  const {
    title,
    selectedStages,
    selectedStroke,
    selectedType,
    description,
    teachingPoints,
  } = req.body;

  let emptyFields = [];
  if (!title) {
    emptyFields.push('title');
  }
  if (!selectedStages) {
    emptyFields.push('stages');
  }
  if (!selectedStroke) {
    emptyFields.push('stroke');
  }
  if (!selectedType) {
    emptyFields.push('type');
  }
  if (!description) {
    emptyFields.push('description');
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: 'Please fill in all required fields', emptyFields });
  }

  try {
    const user_id = req.user._id;
    const entry = await Entries.create({
      title,
      stages: selectedStages,
      stroke: selectedStroke,
      type: selectedType,
      description,
      user_id,
      teachingPoints,
    });
    res.status(200).json(entry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete entry

module.exports = { createNewEntry };
