const express = require('express');
const router = express.Router();

const controller = require('../controllers/booksController');

console.log(controller.all);

router.get('/books', controller.all);

router.get('/books/:id', controller.byId);

module.exports = router;
