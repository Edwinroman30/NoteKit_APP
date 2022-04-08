const router = require("express").Router();
const {getAllNotes,insertNotes,updateNotes,deleteNotes} = require('../controllers/notesController');

// # Notes Endpoints

router.get('/', getAllNotes);

router.get('/:uid', (req, res) => {
    console.log('Ruta diferente...')
    return res.status(200).send('Esta ruta sera atacada con el identificador de la tarjeta.');
});

router.post('/', insertNotes);

router.put('/', updateNotes);

router.delete('/', deleteNotes);

module.exports = router;