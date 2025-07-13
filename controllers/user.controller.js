const httpStatus = require('http-status')
const userService = require('../services/user.service')

const createUser = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body)
    return res.status(httpStatus.CREATED).json({
      success: true,
      status: httpStatus.CREATED,
      data: user
    })
  } catch (err) {
    return next(err)
  }
}

const getUsers = async (req, res, next) => {
  try {
    const users = await userService.getUsers()
    return res.status(httpStatus.OK).json({
      success: true,
      status: httpStatus.OK,
      data: users
    })
  } catch (err) {
    return next(err)
  }
}

module.exports = {
  createUser,
  getUsers
}
