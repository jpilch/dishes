import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import './styles/index.scss';
import App from './features/app/App';
import store from "./features/app/store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
