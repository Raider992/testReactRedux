const booksArray = require('../constants/constBooks');

exports.all = (req, res) => {
    console.log(booksArray);
    return res.json(booksArray);
};

exports.byId = (req, res) => {
    const id = req.params.id;

    const bookByID = booksArray.find(o => o.id === Number(id));

    return res.json(bookByID);
};