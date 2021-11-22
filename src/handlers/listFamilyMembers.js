module.exports = (req, res) => {
    const familyMembers = req.dataSet.familyMembers
    return res.json(familyMembers)
}