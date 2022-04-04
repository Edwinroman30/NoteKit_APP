const {Schema, model} = require('mongoose');

const userSchema = new Schema({

    email:{
        type: String,
        required: true,
        unique: true
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
    dateOfBirth : { 
        type: Date
    },
    status: {
        type: Boolean,
        default: true,
        required: true
    },
    isGoogleSignIn: {
        type: Boolean
    },
    lastSignIn: {
        type: Date,
        default: new Date()
    },
    registrationDate: {
        type: Date,
        default: new Date()
    }
});

userSchema.methods.toJSON = function (){

    const { _id, __v, password, ...filterData } = this.toObject();
    filterData.uid = _id;
    return filterData;
}

const User = model('User', userSchema, 'User');

module.exports = User;