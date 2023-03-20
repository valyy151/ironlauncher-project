const { Schema, model } = require('mongoose');

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const bookSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		author: {
			type: String,
			required: true,
		},
		rating: {
			type: Number,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	},
);

const User = model('Book', bookSchema);

module.exports = User;
