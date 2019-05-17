const express = require('express');

const routes = require('./routes/index');
const booksRoute = require('./routes/books');

const PORT = require('./constants/const')


const app = express();

app.get('/', (req, res) => {
    res.send('Hello ;-)');
});

app.listen(PORT, () => {
    console.log('API started');
});

