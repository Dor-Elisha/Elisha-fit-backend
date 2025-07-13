const User = require('../models/user.model')

const createUser = async (userBody) => {
  const user = new User(userBody)
  return user.save()
}

const getUsers = async () => {
  return User.find()
}

module.exports = {
  createUser,
  getUsers
}
