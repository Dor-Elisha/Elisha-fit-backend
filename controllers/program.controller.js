const httpStatus = require('http-status')
const programService = require('../services/program.service')

const getPrograms = async (req, res, next) => {
  try {
    const { userId } = req.params
    const programs = await programService.getPrograms(userId)
    return res.status(httpStatus.OK).json({
      success: true,
      status: httpStatus.OK,
      data: programs
    })
  } catch (err) {
    return next(err)
  }
}

const saveProgram = async (req, res, next) => {
  try {
    const { userId } = req.params
    const program = await programService.saveProgram(userId, req.body)
    return res.status(httpStatus.CREATED).json({
      success: true,
      status: httpStatus.CREATED,
      data: program
    })
  } catch (err) {
    return next(err)
  }
}

const editProgram = async (req, res, next) => {
  try {
    const { userId, programId } = req.params
    const program = await programService.editProgram(userId, programId, req.body)
    return res.status(httpStatus.OK).json({
      success: true,
      status: httpStatus.OK,
      data: program
    })
  } catch (err) {
    return next(err)
  }
}

module.exports = { getPrograms, saveProgram, editProgram }
