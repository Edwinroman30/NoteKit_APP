const express = require('express');
const router = express.Router();
const {getAllNotes,insertNotes,updateNotes,deleteNotes} = require('../controllers/notesController');

// # Notes Endpoints

router.get('/notes', getAllNotes);

router.post('/notes', insertNotes);

router.put('/notes', updateNotes);

router.delete('/notes', deleteNotes);




module.exports = {
    router
}