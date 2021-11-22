const ss = require('superstruct')
const defs = require('../resource-definitions')

module.exports = (req, res, next) => {
    const choreId = Number(req.params.choreId)
    const update = req.body
    const [err, validatedUpdate] = ss.validate(update, defs.UpdateChoreRequest)
    if (err) {
        req.logger.error(err)
        res.status(400)
        return next(err)
    }

    if (validatedUpdate.status === 'COMPLETED') {
        req.dataSet.chores[choreId] = {...req.dataSet.chores[choreId], completedOn: new Date(), ...validatedUpdate}
    } else {
        const choreCount = req.dataSet.getChoreCountForFamilyMember(validatedUpdate.assignedTo)
        if (choreCount === 3) {
            res.status(400)
            return next(new Error(`"${validatedUpdate.assignedTo}" has 3 chores assigned already. No more please`))
        }
        if (validatedUpdate.status === 'PENDING') {
            const pendingCount = req.dataSet.getPendingChoreCountForFamilyMember(validatedUpdate.assignedTo)
            if (pendingCount === 1) {
                res.status(400)
                return next(new Error(`"${validatedUpdate.assignedTo}" already has 1 PENDING task`))
            }
        }

        req.dataSet.chores[choreId] = {...req.dataSet.chores[choreId], ...validatedUpdate}
    }

    return res.json(req.dataSet.chores[choreId])
}