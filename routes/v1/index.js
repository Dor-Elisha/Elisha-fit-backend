const express = require('express')
const healthRoute = require('./health.route')
const helloWorldRoute = require('./helloworld.route')
const authRoute = require('./auth.route')
const programRoute = require('./program.route')

const router = express.Router()

router.use('/health', healthRoute)
router.use('/', helloWorldRoute)
router.use('/auth', authRoute)
router.use('/programs', programRoute)

module.exports = router
