const express = require('express')

const indexRouter = express.Router()
const eventsRouter = require('./eventsRouter.js')

indexRouter.use( "/events", eventsRouter )

module.exports = indexRouter
