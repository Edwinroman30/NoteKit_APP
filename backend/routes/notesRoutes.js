const router = require("express").Router();
const {getAllNotes,insertNotes,updateNotes,deleteNotes} = require('../controllers/notesController');

// # Notes Endpoints

router.get('/', getAllNotes);

router.post('/', insertNotes);

router.put('/', updateNotes);

router.delete('/', deleteNotes);

module.exports = router;