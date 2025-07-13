const crypto = require('crypto')
const httpStatus = require('http-status')
const User = require('../models/user.model')

const hashPassword = (password) => {
  return crypto.createHash('sha256').update(password).digest('hex')
}

const registerUser = async (email, password) => {
  const existing = await User.findOne({ email })
  if (existing) {
    const err = new Error('User already exists')
    err.statusCode = httpStatus.BAD_REQUEST
    throw err
  }
  const user = await User.create({ email, password: hashPassword(password) })
  return user
}

const loginUser = async (email, password) => {
  const user = await User.findOne({ email })
  if (!user || user.password !== hashPassword(password)) {
    const err = new Error('Invalid credentials')
    err.statusCode = httpStatus.UNAUTHORIZED
    throw err
  }
  return user
}

const getUserInfo = async (userId) => {
  const user = await User.findById(userId)
  if (!user) {
    const err = new Error('User not found')
    err.statusCode = httpStatus.NOT_FOUND
    throw err
  }
  return user
}

module.exports = {
  registerUser,
  loginUser,
  getUserInfo
}
