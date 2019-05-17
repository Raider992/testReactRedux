import React, {Component} from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import Home from './components/layouts/Home';
import About from './components/layouts/About';
import Layout from './components/layouts/Layout';
import BooksItemDetail from './components/presentation/BooksItemDetail';
import store from './stores/store';
import BookAnnotation from './components/containers/BookAnnotation';

import './App.css';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Layout>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path='/books/:id' component={BookAnnotation}/>
                    </Layout>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;