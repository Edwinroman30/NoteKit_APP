const { request, response } = require('express');
const Card = require('../models/schemas/cards');
const CardCategory = require('../models/schemas/cardsCategories');
const User = require('../models/schemas/user');

const getAllNotes = async (req = request, res = response) =>{

    try {
            
        const cards = await Card.find()
        .populate({
            path: 'userId',
            model: 'User',
            select: 'name lastName'
        });
        

        res.status(200).json({ data: [...cards], success: true });
        
    } catch (err) {        
        res.status(500).json({ success: false, msg: err.message });
    }

}

const insertNotes = (req = request, res = response) =>{

    res.json('Inserting working...');

}


const updateNotes = (req = request, res = response) =>{

    res.json('Updating working...');

}

const deleteNotes = (req = request, res = response) =>{

    res.json('Deleting working...');

}

module.exports = {
    insertNotes,
    updateNotes,
    deleteNotes,
    getAllNotes
}