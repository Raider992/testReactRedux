import React, {Component} from 'react';
import Books from '../containers/Books';

class Home extends Component {
    render() {
        return (
            <div>
                <div>Welcome to my library</div>
                <div>
                    <Books />
                </div>
            </div>
        )
    }
}

export default Home;