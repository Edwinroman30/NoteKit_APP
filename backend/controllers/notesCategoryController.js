const { request, response } = require('express');
const Card = require('../models/schemas/cards');
const CardCategory = require('../models/schemas/cardsCategories');
const User = require('../models/schemas/user');

const getAllCategory = async (req = request, res = response) =>{

    try {
            
        const cardCategories = await CardCategory.find()
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