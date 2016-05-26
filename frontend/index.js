/**
 * Created by Андрей on 25.05.2016.
 */
import 'todomvc-app-css/index.css';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.js';
import store from './store';


ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('container'));

