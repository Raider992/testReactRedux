const express = require('express');
const router = express.Router();

[booksarray]

router.get('/books', function(req, res, next) {
    res.status(200).send({
        data: booksArray
    })
});

router.get('/books/:id', function(req, res, next){
    const id = req.params.id;

    const bookByID = booksArray.find(o => o.id === id);

    res.status(200).send({
        data: bookByID
    })

});

module.exports = router;
