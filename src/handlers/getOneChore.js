module.exports = (req, res) => {
    const { choreId } = req.params
    res.json({
        id: choreId,
        ...req.dataSet.chores[choreId]
    })
}