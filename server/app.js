const express = require('express');
const routes = require('./routes/index');
const booksRoute = require('./routes/books');

let app = express();
const PORT = process.env.PORT || 5000;

app.use('/', routes);

app.use('/books', booksRoute);

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});