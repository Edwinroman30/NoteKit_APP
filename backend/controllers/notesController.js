const { request, response } = require('express');

const getAllNotes = (req = request, res = response) =>{

    res.json('Getting notes');

}

const insertNotes = (req = request, res = response) =>{

    res.json('Its working...');

}


const updateNotes = (req = request, res = response) =>{

    res.json('Its working...');

}

const deleteNotes = (req = request, res = response) =>{

    res.json('Its working...');

}

module.exports = {
    insertNotes,
    updateNotes,
    deleteNotes,
    getAllNotes
}