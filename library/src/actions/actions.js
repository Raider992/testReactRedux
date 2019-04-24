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
        return fetch(`/books`)
            .then( (response) => response.json() )
            .then( (data) => console.log(data))
            .catch( (e) => console.log(e) );
    }
}

export function fetchBooksItem(id){
    return dispatch => {
        return fetch(`/books/${id}`)
            .then( (response) => response.json() )
            .then( (data) => dispatch(newsItemReceived(data.data)))
            .catch( (e) => console.log(e) );
    }
}