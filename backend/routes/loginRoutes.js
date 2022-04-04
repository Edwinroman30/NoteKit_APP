const router = require('express').Router();
const {body} = require('express-validator');
const { validationGrabber } = require('../middlewares');
const { verifyEmailAsync } = require('../helpers');
const { loginFunction, onboardingFunction } = require('../controllers/sessionController');

router.get('/login', (req, res) => res.render('pages/login') );

router.post('/login',
[
    body('email').isEmail().bail(),
    body('email').custom( verifyEmailAsync ).bail(),
    body( 'password' ).notEmpty()
],
validationGrabber,
loginFunction);

router.get('/logout', (req, res) => {
    
    res.clearCookie('tokenwp');
    return res.status(200).redirect('/');
});

router.post('/onboarding', onboardingFunction);


module.exports = router;