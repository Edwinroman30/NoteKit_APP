const jwt = require('jsonwebtoken');
const User = require('../../models/schemas/user');

const jwtValidationMiddleware = async (req, res, next) =>{

    try {
        
        //JWT
        //const apiKey = req.headers['x-api-key'];
        
        //console.log(req.cookies.tokenwp);

        if(req.cookies.tokenwp === undefined){
           return res.redirect('/login');
        }

        const { uid } = jwt.verify(req.cookies.tokenwp, process.env.JWT_PRIVATE_KEY);
        
        const userMatched = await User.findById( uid ).exec();
        
        //Important security validation.
        if(!userMatched){
            return res.status(404).json( {msg : `User does not exits in DB`} );
        }

        if(!userMatched.status){
           return res.status(401).json( {msg : `User ${userMatched.email} is unauthorized`} );
        }
        
        //JUGAR CON EL USER
        req.userMatched = userMatched;
        next();

    } catch (error) {
       
       if(error.name == 'JsonWebTokenError'){
            return res.status(501).json( {msg: 'The key provided is not valid.'} );
       }

       //TODO: Check out if tokens are out of date.

       return res.status(501).json( {msg: `-> ${error}`} );
    }

}

module.exports = jwtValidationMiddleware;