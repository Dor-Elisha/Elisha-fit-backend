const httpStatus = require('http-status')
const authService = require('../services/auth.service')

const register = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const user = await authService.registerUser(email, password)
    return res.status(httpStatus.CREATED).json({
      success: true,
      status: httpStatus.CREATED,
      data: { id: user._id, email: user.email }
    })
  } catch (err) {
    return next(err)
  }
}

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const user = await authService.loginUser(email, password)
    return res.status(httpStatus.OK).json({
      success: true,
      status: httpStatus.OK,
      data: { id: user._id, email: user.email }
    })
  } catch (err) {
    return next(err)
  }
}

const getUserInfo = async (req, res, next) => {
  try {
    const { id } = req.params
    const user = await authService.getUserInfo(id)
    return res.status(httpStatus.OK).json({
      success: true,
      status: httpStatus.OK,
      data: { id: user._id, email: user.email, programs: user.programs }
    })
  } catch (err) {
    return next(err)
  }
}

module.exports = { register, login, getUserInfo }
