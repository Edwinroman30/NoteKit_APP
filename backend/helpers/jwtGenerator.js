const jwt = require('jsonwebtoken');

const generateToken = ( uid = '' ) =>{

    return new Promise( (resolve , reject) => {

        jwt.sign( { uid },
                process.env.JWT_PRIVATE_KEY,
                { expiresIn: '1h' },
                (error, encoded) => {
                    if(error){
                        reject(error) 
                    }
                   resolve(encoded)
                }
        );
    });
}

module.exports = generateToken;