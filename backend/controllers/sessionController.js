const { request, response} = require('express');
const User = require('../models/schemas/user');
const bcrypt = require('bcrypt');
const { generateToken } = require('../helpers');


const loginFunction = async (req = request, res = response) => {
    
    try {
        
        const userBody = req.body;
    
        const trustedUser = await User.findOne( { email: userBody.email } ).exec();
    
        if(trustedUser.status === false){
            return res.status(401).json('This account for some reason have been deleted. Please if something is wrong contact to: support@enterprice.com');
        }
    
        if( !bcrypt.compareSync(userBody.password, trustedUser.password) ){
            return res.status(401).json('Incorrect password, please verify it!');
        }
    
        const token = await generateToken(trustedUser.id);
    
        res.cookie(`tokenwp`, token ,{
            maxAge: 1000*60*60*1,
            // expires works the same as the maxAge
            //expires: new Date('27 03 2022'),
            secure: false,
            httpOnly: true,
            sameSite: 'lax'
        });
        
        return res.redirect('home');
        
        //generate token
        //return res.status(200).json( { msg: 'Success Log In!', token } );
            
    } catch (error) {
        
        return res.json( {error} );

    }

}

const onboardingFunction = (req, res) => {

}

module.exports = {
    loginFunction,
    onboardingFunction
}