const mongoose = require('mongoose');

const User = new mongoose.Schema(
	{
		username: { type: String, required: true ,unique:true},
		password: { type: String, required: true },
	},
)

const UserModel = mongoose.model('signup', User)

module.exports = UserModel