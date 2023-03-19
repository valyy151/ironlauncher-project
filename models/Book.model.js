const { Schema, model } = require('mongoose');

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const bookSchema = new Schema(
	{
		title: String,
		description: String,
		author: String,
		rating: Number,
	},
	{
		timestamps: true,
	},
);

module.exports = model('Book', bookSchema);

const User = model('Book', bookSchema);

module.exports = User;
