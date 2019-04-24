import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {fetchBooksItem} from '../../actions/actions'

class BooksItemDetail extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.data.title}</h2>
                <p>{this.props.data.desc}</p>
            </div>
        )
    }
}

BooksItemDetail.propTypes = {

    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        desc: PropTypes.string
    })
};

export default BooksItemDetail