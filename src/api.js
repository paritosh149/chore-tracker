const express = require('express')
const bodyParser = require('body-parser')
const logger = require('consola')
const Dataset = require('./dataset')
const handlers = require('./handlers')

const PORT = process.env.PORT || 8080
const dataset = new Dataset()

const app = express()
    .use(bodyParser.json())
    .use((req, res, next) => {
        req.logger = logger
        req.dataSet = dataset
        return next()
    })
    .get('/api/chores', handlers.chores.listChores)
    .get('/api/chores/:choreId', handlers.chores.getOneChore)
    .get('/api/family-members', handlers.familyMembers.listFamilyMembers)
    .post('/api/chores', handlers.chores.createChore)
    .put('/api/chores/:choreId', handlers.chores.updateChore)
    .use((err, req, res, next) => {
        req.logger.error(err)
        if (res.headersSent) {
            return next(err)
        }
        if (res.statusCode >=400 && res.statusCode <500 ) {
            res.json({ message: err.message })
        } else {
            res.status(500)
        }
        res.send()
    })

app.listen(PORT, () => {
    logger.info(`API Server started on http://localhost:${PORT}/api`)
})

