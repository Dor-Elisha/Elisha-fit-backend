const httpStatus = require('http-status')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(httpStatus.BAD_REQUEST).json({
        success: false,
        message: 'Email already exists',
        status: httpStatus.BAD_REQUEST
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create({ name, email, password: hashedPassword })

    return res.status(httpStatus.CREATED).json({
      success: true,
      status: httpStatus.CREATED,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    })
  } catch (err) {
    return next(err)
  }
}

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(httpStatus.UNAUTHORIZED).json({
        success: false,
        message: 'Invalid credentials',
        status: httpStatus.UNAUTHORIZED
      })
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      return res.status(httpStatus.UNAUTHORIZED).json({
        success: false,
        message: 'Invalid credentials',
        status: httpStatus.UNAUTHORIZED
      })
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET || 'secret', {
      expiresIn: '1h'
    })

    return res.status(httpStatus.OK).json({
      success: true,
      status: httpStatus.OK,
      data: { token }
    })
  } catch (err) {
    return next(err)
  }
}

const createUser = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(httpStatus.BAD_REQUEST).json({
        success: false,
        message: 'Email already exists',
        status: httpStatus.BAD_REQUEST
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create({ name, email, password: hashedPassword, role })

    return res.status(httpStatus.CREATED).json({
      success: true,
      status: httpStatus.CREATED,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    })
  } catch (err) {
    return next(err)
  }
}

module.exports = { register, login, createUser }
