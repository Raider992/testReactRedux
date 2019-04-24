import constants from '../constants/actionTypes'

var initialState = {
    books: []
};

export default (state = initialState, action) => {

    var updated = Object.assign({}, state);

    switch(action.type) {

        case constants.BOOKS_RECEIVED:
            updated['books'] = action.books;
            return updated;

        case constants.BOOKSITEM_RECEIVED:
            updated['booksItem'] = action.booksItem;
            return updated ;

        case constants.BOOKSITEM_LOADING:
            updated['booksItemLoading'] = true;
            return updated;

        default:
            return state;
    }
}