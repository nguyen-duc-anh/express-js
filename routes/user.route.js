const express = require('express')
const router = express.Router()

const controller = require('../controllers/user.controller')

router.get('/', controller.index)

router.get('/create', controller.create)

router.get('/search', controller.search)

router.post('/create', controller.postCreate)

router.get('/:id', controller.view)

module.exports = router