const express = require('express');
const { createNewEntry } = require('../controllers/entryController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

//require auth for all workout routes
router.use(requireAuth);

//get all entries - search for entries

//get single entry

//add new entry
router.post('/', createNewEntry);

//update entry

//delete entry

module.exports = router;
