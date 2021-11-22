module.exports = (req, res) => {
    const chores = req.dataSet.chores
    const response = chores.map((value, index) => Object.assign({}, {id: index}, value))
    return res.json(response)
}
