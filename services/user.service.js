const httpStatus = require('http-status')
const User = require('../models/user.model')

const updateName = async (userId, name) => {
  const user = await User.findById(userId)
  if (!user) {
    const err = new Error('User not found')
    err.statusCode = httpStatus.NOT_FOUND
    throw err
  }
  user.name = name
  await user.save()
  return user
}

module.exports = {
  updateName
}
