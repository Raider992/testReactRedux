import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


class BooksItemListing extends Component {
    render() {
        console.log('123', this.props.data);
        return (
            <div>
                <div><Link to={`/books/${this.props.data.id}`}><strong>{this.props.data.name}</strong></Link></div>
                <div>{this.props.data.author}</div>
            </div>
        )
    }
}

BooksItemListing.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        desc: PropTypes.string
    })
};
export default BooksItemListing