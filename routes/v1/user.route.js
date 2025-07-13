const express = require('express')
const userController = require('../../controllers/user.controller')

const router = express.Router()

router.put('/:userId/name', userController.updateName)

module.exports = router
