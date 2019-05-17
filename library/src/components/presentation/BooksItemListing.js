import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


class BooksItemListing extends Component {
    render() {
        return (
            <div>
                <div><Link to={`/books/${this.props.data.id}`}><strong>{this.props.data.title}</strong></Link></div>
                <div>{this.props.data.author}</div>
            </div>
        )
    }
}

BooksItemListing.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        desc: PropTypes.string
    })
};
export default BooksItemListing