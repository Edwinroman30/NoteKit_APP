const { response, request } = require('express');
const User = require('../models/schemas/user');
const bcrypt = require('bcrypt');

const getAllUserAsync = async (req = request, res = response) => {

    try {
        
        const users = await User.find().exec();
       
        res.json( {data: users, success: true} );

    } catch (err) {

        res.status(500).json({ success: false, msg: err.message });
    }

}

const insertUserControllerAsync = async (req = request, res = response) => {
    

    if(req.body.dateOfBirth === undefined)
        req.body.dateOfBirth = null

    const body = req.body;
    
    //Encryptation:
    const saltRound = bcrypt.genSaltSync(10);    
    body.password = bcrypt.hashSync(body.password, saltRound);

    //middleware validations recordar
    const currentUser = new User(body);

    await currentUser.save();
    
    return res.status(200).json( {msg: 'mensaje'});
}

const deleteUserControllerAsync = async (req = request, res = response) => {

    //add middleware if exits

    const uid = req.body.uid

    await User.findByIdAndUpdate(uid, {status: false} );

    res.status(200).json({ msg: 'User deleted.' });

}

module.exports = {
    getAllUserAsync,
    insertUserControllerAsync,
    deleteUserControllerAsync
}