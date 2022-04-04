const {Schema, model} = require('mongoose');

const cardCategoryShema = new Schema({

    categoryName : {
        type: String,
        required: true
    },
    userId : {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true   
    },
    registrationDate: {
        type: Date,
        default: new Date()
    }

});

const CardCategory = model('CardCategory', cardCategoryShema, 'CardCategory');

module.exports = CardCategory;