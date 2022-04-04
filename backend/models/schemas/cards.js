const {Schema, model} = require('mongoose');

const cardShema = new Schema({

    title : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    imgUrl : {
        type: String,
        required: true
    },
    categoryId : {
        type: Schema.Types.ObjectId,
        ref: 'CardCategory'
    },
    userId : {
        type: Schema.Types.ObjectId,
        ref: 'User'
        
    },
    registrationDate: {
        type: Date,
        default: new Date()
    }

});

const Card = model('Card', cardShema, 'Card');

module.exports = Card;