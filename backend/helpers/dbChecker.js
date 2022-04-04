const User = require('../models/schemas/user');


const verifyIdentifier = async ( uid = '' ) => {

    try {
        
        if( uid === null || uid === "" || uid === undefined )
        {
            throw new Error('Please insert the uid');
        }
        
        const user = await User.findById( {_id : uid} ).exec();

        if(!user){
            throw new Error('User not matched...');
        }
        
    } catch (error) {
        
        throw new Error( error );
    }
}

const verifyEmailAsync = async ( email = '' ) => {

    try {
        
        if( email === null || email === "" || email === undefined )
        {
            throw new Error('Please insert the email or one valid');
        }
        
        const user = await User.findOne( { email: email} ).exec();

        if(!user){
            throw new Error('Email not matched in our DB...');
        }

        //may be check if is un available.
        
    } catch (error) {
        
        throw new Error( error );
    }
}


module.exports = {
    verifyIdentifier,
    verifyEmailAsync
}