const httpStatus = require('http-status')
const userService = require('../services/user.service')

const updateName = async (req, res, next) => {
  try {
    const { userId } = req.params
    const { name } = req.body
    const user = await userService.updateName(userId, name)
    return res.status(httpStatus.OK).json({
      success: true,
      status: httpStatus.OK,
      data: { id: user._id, email: user.email, name: user.name }
    })
  } catch (err) {
    return next(err)
  }
}

module.exports = { updateName }
