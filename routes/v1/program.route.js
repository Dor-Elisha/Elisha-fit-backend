const express = require('express')
const programController = require('../../controllers/program.controller')

const router = express.Router()

router.route('/:userId')
  .get(programController.getPrograms)
  .post(programController.saveProgram)

router.route('/:userId/:programId')
  .put(programController.editProgram)

module.exports = router
