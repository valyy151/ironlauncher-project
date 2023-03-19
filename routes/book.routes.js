const router = require('express').Router();
const Book = require('../models/Book.model');

router.get('/', (req, res) => {
	Book.find()
		.then((books) => {
			res.render('books/books-list', { books });
		})
		.catch((err) => console.log('Error retrieving Books from the Database', err));
});

router
	.route('/create')
	.get((req, res) => {
		res.render('books/book-create');
	})
	.post((req, res) => {
		const { title, author, rating, description } = req.body;
		Book.create({ title, author, rating, description })
			.then((data) => {
				console.log('New Book Created: ', data);
				res.redirect('/books');
			})
			.catch((err) => console.log(err));
	});

router.get('/:bookId', (req, res) => {
	Book.findById(req.params.bookId)
		.then((book) => res.render('books/book', book))
		.catch((err) => console.log(err));
});

module.exports = router;
