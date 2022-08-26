const { request, response } = require('express');
const Card = require('../models/schemas/cards');
const CardCategory = require('../models/schemas/cardsCategories');

const getAllCategory = async (req = request, res = response) =>{

    try {
            
        const cardCategories = await CardCategory.find( { userId : req.userMatched._id } )
        .populate({
            path: 'userId',
            model: 'User',
            select:
            'name lastName'
        });

        res.status(200).json({ data: [...cardCategories], success: true });
        
    } catch (err) {        
        res.status(500).json({ success: false, msg: err.message });
    }

}

const getCategoryById = async (req = request, res = response) =>{

    try {

        const card = await Card.findById( req.params.uid ).exec();
       
        return res.status(200).json( {data: card, success: true} );
      
    } catch (error) {
        return res.status(400).json( {error, success: false} );
    }

}


const insertCategory = (req = request, res = response) =>{


    res.json('Inserting working...');

}


const updateCategory = (req = request, res = response) =>{

    res.json('Updating working...');

}

const deleteCategory = (req = request, res = response) =>{

    res.json('Deleting working...');

}

module.exports = {
    getAllCategory
}