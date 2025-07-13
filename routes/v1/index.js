const express = require('express')
const healthRoute = require('./health.route')
const helloWorldRoute = require('./helloworld.route')
const userRoute = require('./user.route')

const router = express.Router()

router.use('/health', healthRoute)
router.use('/', helloWorldRoute)
router.use('/users', userRoute)

module.exports = router
