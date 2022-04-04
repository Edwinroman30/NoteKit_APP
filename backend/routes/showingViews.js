const router = require('express').Router();
const {jwtValidationMiddleware} = require('../middlewares/index'); //Puedo extraer mas de una funcion


//Just views renders:
router.get('/home', jwtValidationMiddleware, (req, res) => res.render('pages/home', {title: 'Home'}) );
router.get('/', (req, res) => res.render('pages/welcome', {title: '📘 NoteKitApp'}) );
router.get('/login', (req, res) => res.render('pages/login', {title: 'Login | 📘 NoteKitApp'}) );


module.exports = router;