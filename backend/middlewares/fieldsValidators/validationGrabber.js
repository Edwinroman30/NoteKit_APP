const { response, request } = require('express');
const { validationResult } = require('express-validator');

const validationGrabberAsync = async (req, res = response, next) =>{

    try {
        
        const anyError = validationResult(req);
    
        if(!anyError.isEmpty()){
            return res.status(400).json( anyError.array() );
        }
    
        next();

    } catch (error) {
        
        throw new Error(error);
    }


}

module.exports = validationGrabberAsync;