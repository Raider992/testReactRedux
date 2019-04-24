import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from '../reducers/booksReducer';

const store = createStore(
    combineReducers({
        books: booksReducer
    }),
    applyMiddleware(
        thunk
    )
);

export default store;