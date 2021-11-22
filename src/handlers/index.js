const createChore = require('./createChore')
const listChores = require('./listChores')
const updateChore = require('./updateChore')
const getOneChore = require('./getOneChore')
const listFamilyMembers = require('./listFamilyMembers')

module.exports = {
    chores: {
        createChore,
        listChores,
        getOneChore,
        updateChore,
    },
    familyMembers: {
        listFamilyMembers,
    }
}