const httpStatus = require('http-status')
const mongoose = require('mongoose')
const User = require('../models/user.model')

const ensureProgramsField = (user) => {
  if (!Array.isArray(user.programs)) {
    user.programs = []
    return true
  }
  return false
}

const ensureProgramsFieldForAllUsers = async () => {
  await User.updateMany({ programs: { $exists: false } }, { $set: { programs: [] } })
}

const getPrograms = async (userId) => {
  const user = await User.findById(userId)
  if (!user) {
    const err = new Error('User not found')
    err.statusCode = httpStatus.NOT_FOUND
    throw err
  }
  const changed = ensureProgramsField(user)
  if (changed) await user.save()
  return user.programs
}

const saveProgram = async (userId, programData) => {
  const user = await User.findById(userId)
  if (!user) {
    const err = new Error('User not found')
    err.statusCode = httpStatus.NOT_FOUND
    throw err
  }
  ensureProgramsField(user)
  const program = { _id: new mongoose.Types.ObjectId(), ...programData }
  user.programs.push(program)
  await user.save()
  return program
}

const editProgram = async (userId, programId, programData) => {
  const user = await User.findById(userId)
  if (!user) {
    const err = new Error('User not found')
    err.statusCode = httpStatus.NOT_FOUND
    throw err
  }
  ensureProgramsField(user)
  const index = user.programs.findIndex(p => String(p._id) === String(programId))
  if (index === -1) {
    const err = new Error('Program not found')
    err.statusCode = httpStatus.NOT_FOUND
    throw err
  }
  user.programs[index] = { ...user.programs[index].toObject ? user.programs[index].toObject() : user.programs[index], ...programData, _id: user.programs[index]._id }
  await user.save()
  return user.programs[index]
}

module.exports = {
  getPrograms,
  saveProgram,
  editProgram,
  ensureProgramsFieldForAllUsers
}
