import React from 'react';
import ReactDOM from 'react-dom';
import './styles/Index.css';
import Layout from './js/Layout';
import * as serviceWorker from './serviceWorker';

import "jquery";
import "popper.js";


ReactDOM.render(<Layout />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
