const router = require('express').Router();
const Book = require('../models/Book.model');

router.get('/', (req, res) => {
	Book.find()
		.then((books) => {
			res.render('books/list', { books });
		})
		.catch((err) => console.log('Error retrieving Books from the Database', err));
});

router
	.route('/create')
	.get((req, res) => {
		res.render('books/create');
	})
	.post((req, res) => {
		const { title, author, rating, description } = req.body;
		Book.create({ title, author, rating, description })
			.then((data) => {
				console.log('New Book Created: ', data.title);
				res.redirect('/books');
			})
			.catch((err) => console.log(err));
	});

router.get('/:bookId', (req, res) => {
	Book.findById(req.params.bookId)
		.then((book) => res.render('books/book', book))
		.catch((err) => console.log(err));
});

router
	.route('/:bookId/edit')
	.get((req, res) => {
		Book.findById(req.params.bookId)
			.then((book) => res.render('books/edit', book))
			.catch((err) => console.log(err));
	})
	.post((req, res) => {
		const { title, author, rating, description } = req.body;
		Book.findByIdAndUpdate(req.params.bookId, { title, author, rating, description }, { new: true })
			.then((updatedBook) => res.redirect(`/books/${updatedBook.id}`))
			.catch((err) => console.log(err));
	});

router.post('/:bookId/delete', (req, res) => {
	Book.findByIdAndDelete(req.params.bookId)
		.then((book) => res.redirect('/books'))
		.catch((err) => console.log(err));
});

module.exports = router;
