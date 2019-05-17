import actionTypes from '../constants/actionTypes';

const booksReceived = (books) => {
    return {
        type: actionTypes.BOOKS_RECEIVED,
        books: books
    }
};

const booksItemReceived = (booksItem) => {
    return {
        type: actionTypes.BOOKSITEM_RECEIVED,
        booksItem: booksItem
    }
};

const booksItemLoading = () => {
    return {
        type: actionTypes.BOOKSITEM_LOADING
    }
};

export function fetchBooks(booksArray){
    return dispatch => {
        return fetch(`http://localhost:5000/books`)
            .then( (response) => response.json())
            .then( (data) => dispatch(booksReceived(data.data)))
            .catch( (e) => console.log(e) );
    }
}

export function fetchBooksItem(id){
    return dispatch => {
        return fetch(`http://localhost:5000//books/${id}`)
            .then( (response) => response.json() )
            .then( (data) => dispatch(booksItemReceived(data.data)))
            .catch( (e) => console.log(e) );
    }
}