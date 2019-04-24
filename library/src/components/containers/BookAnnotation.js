import React, { Component} from 'react';
import BooksItemDetail from '../presentation/BooksItemDetail';
import { connect } from 'react-redux';
import { fetchBooksItem } from '../../actions/actions'

class BookAnnotation extends Component {


    componentDidMount(){
        this.props.dispatch(fetchBooksItem(this.props.match.params.id));
    }

    render(){
        let { booksItem } = this.props;

        return (
            <div>
                <h2>New Story</h2>
                <ul>
                    { booksItem ? <BooksItemDetail data={booksItem} /> : null}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        booksItem: state.books.booksItem
    }
}

export default connect(mapStateToProps)(BookAnnotation)