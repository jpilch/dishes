import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import './styles/index.scss';
import App from './features/app/App';
import store from "./features/app/store";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
