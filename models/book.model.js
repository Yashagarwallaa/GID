const mongoose = require('mongoose');

const Book = new mongoose.Schema(
	{
		bookname: { type: String, required: true ,unique:true},
		price: { type: String, required: true },
	},
)

const Bookmodel = mongoose.model('lists', Book)

module.exports = Bookmodel 