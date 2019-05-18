import React, {Component} from 'react';
import Books from '../containers/Books';

const Home = () => {
    return (
        <div>
            <div>Welcome to my library</div>
            <div>
                <Books/>
            </div>
        </div>
    )
}

export default Home;