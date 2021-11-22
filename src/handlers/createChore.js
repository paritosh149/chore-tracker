const ss = require('superstruct')
const defs = require('../resource-definitions')

module.exports = (req, res, next) => {
    const newChore = req.body
    const [err, validatedNewChore] = ss.validate(newChore, defs.CreateChoreRequest)
    if (err) {
        req.logger.error(err)
        res.status(400)
        return next(err)
    }
    const choreCount = req.dataSet.getChoreCountForFamilyMember(validatedNewChore.assignedTo)
    if (choreCount === 3) {
        res.status(400)
        return next(new Error(`"${validatedNewChore.assignedTo}" has 3 chores assigned already. No more please`))
    }
    const choreToAdd = Object.assign({}, {
        id: req.dataSet.chores.length,
        status: 'ASSIGNED',
        assignedOn: new Date(),
        completedOn: null
    }, validatedNewChore)
    req.dataSet.chores.push(choreToAdd)
    return res.json(choreToAdd)
}