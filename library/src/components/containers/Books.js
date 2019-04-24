import React, {Component} from 'react';
import BooksItemListing from '../presentation/BooksItemListing';
import { connect } from 'react-redux';
import {fetchBooks} from '../../actions/actions';

class Books extends Component {

    componentDidMount() {

        this.props.dispatch(fetchBooks());
    }

    render() {

        const booksItems = this.props.books.map((books, i) => {
            return (<li key={i}><BooksItemListing data={books}/></li>);
        });

        return (
            <div>
                <h2>Books</h2>
                {(this.props.books.length > 0) ? <ul>{booksItems}</ul> : <div>Sorry we have nothing new</div>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        books: state.books.books
    }
}

export default Books;