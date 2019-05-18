const express = require('express');

const bookRoutes = require('./routes/books');

const PORT = require('./constants/appConst')


const app = express();

app.get('/', (req, res) => {
    res.send('Hello ;-)');
});

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    next();
});

app.get('/books', bookRoutes);

app.get('/books/:id', bookRoutes);

app.listen(PORT, () => {
    console.log('API started');
});

