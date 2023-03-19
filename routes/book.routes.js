const router = require('express').Router();
const Book = require('../models/Book.model');

router.get('/', (req, res) => {
	Book.find()
		.then((books) => {
			res.render('books/books-list.hbs', { books });
		})
		.catch((err) => console.log('Error retrieving Books from the Database', err));
});

module.exports = router;
