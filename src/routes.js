const routes = require('express').Router()
const SessionController = require('./app/models/controllers/SessionsController')


routes.post('/sessions', SessionController.store)

module.exports = routes