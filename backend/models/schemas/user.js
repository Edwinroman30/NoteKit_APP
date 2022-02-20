const {Schema, model} = require('mongoose');

const userShema = new Schema({

    id : {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password : {
        type: String,
        require: true
    },
    name : {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age : { 
        type: Number 
    },
    status: {
        type: Boolean,
        required: true
    },
    isGoogleSignIn: {
        type: Boolean,
        required: true
    },
    lastSignIn: {
        type: Date,
        required: true
    },
    registrationDate: {
        type: Date,
        required: true
    }
});

const User = model('User',userShema,'User');

module.exports = User;