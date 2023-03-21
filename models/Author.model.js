const { model, Schema } = require('mongoose');

const authorSchema = new Schema({
	name: {
		type: String,
	},
	age: {
		type: Number,
	},
});
const Author = model('Author', authorSchema);

module.exports = Author;
