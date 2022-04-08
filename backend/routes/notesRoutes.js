const router = require("express").Router();
const {getAllNotes,insertNotes,updateNotes,deleteNotes, getNotesById} = require('../controllers/notesController');
const {param} = require('express-validator');
const {jwtValidationMiddleware, validationGrabber} = require('../middlewares/index'); //Puedo extraer mas de una funcion

// # Notes Endpoints

router.use(jwtValidationMiddleware); //! Ojo con este middleware mas el que esta en home se efectuan dos llamadas o consultas a DB.


router.get('/',  getAllNotes); 

router.get('/:uid',
            [
                param('uid').isMongoId()
            ],
            validationGrabber,
getNotesById);

router.post('/', insertNotes);

router.put('/', updateNotes);

router.delete('/', deleteNotes);

module.exports = router;