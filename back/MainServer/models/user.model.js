const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  login: String,
  pwd: String
});

const UserModel = mongoose.model('manager', UserSchema);

module.exports = UserModel