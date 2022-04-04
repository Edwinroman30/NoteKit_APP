const router = require('express').Router();
const { getAllUserAsync, insertUserControllerAsync, deleteUserControllerAsync } = require('../controllers/usersController');
const {body} = require('express-validator');
const { validationGrabber } = require('../middlewares');
const { verifyIdentifier } = require('../helpers/dbChecker');

router.get('/', 
   //middlewares... 
getAllUserAsync);

router.post('/', 
   [
      body('email').isEmail(),
      body('password', 'The length of the password most have at least 5 characters.').notEmpty().isLength({min: 5}),
      body('name').notEmpty(),
      body('lastName').notEmpty(),
      body('gender','Its must include M or F as gender.').custom( (gender) => { if (['M','F'].includes(gender)) return true  }),
      body('dateOfBirth', 'Invalid date, please check out.').optional( { nullable: true } ).isDate()
   ]
   ,validationGrabber,
insertUserControllerAsync);

router.delete(
   '/',
   [
      body('uid', 'It is not a valid id.').isMongoId().bail(),
      body('uid').custom( verifyIdentifier ),
   ],
   validationGrabber,
deleteUserControllerAsync);


module.exports = router;