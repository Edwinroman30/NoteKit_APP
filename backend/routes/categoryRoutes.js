const router = require("express").Router();
const {getAllCategory} = require('../controllers/notesCategoryController');
const {jwtValidationMiddleware} = require('../middlewares/index'); //Puedo extraer mas de una funcion

// # Notes Endpoints

router.use(jwtValidationMiddleware); //! Ojo con este middleware mas el que esta en home se efectuan dos llamadas o consultas a DB.

router.get('/',
    jwtValidationMiddleware,
    getAllCategory);


module.exports = router;