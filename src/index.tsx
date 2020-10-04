import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'
import App from './app'
import { Provider } from 'react-redux';
import store from './store'
import { StoreState } from './types/index';

// import './index.css';
console.log(store ? store.getState() : null)
ReactDOM.render(
    <Provider store={store}>
        <Router history={createBrowserHistory()}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root') as HTMLElement
);