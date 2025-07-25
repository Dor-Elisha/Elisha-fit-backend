const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String },
  createdAt: { type: Date, default: Date.now },
  programs: { type: [mongoose.Schema.Types.Mixed], default: [] }
})

module.exports = mongoose.model('User', userSchema)
