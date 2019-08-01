import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import App from './App';
import { routerMiddleware } from './middlewares/router';
import { ClientActionType } from './reducer/client.reducer';
import * as serviceWorker from './serviceWorker';
import { globalReducer } from './reducer';
import { applyMiddleware } from 'redux';
import { history } from './history';
import thunk from 'redux-thunk';
import { apiMiddleware } from './middlewares/api';

const store = createStore(
    globalReducer,
    {},
    compose(
        applyMiddleware(
            thunk,
            apiMiddleware('/api/'),
            routerMiddleware(history),
        ),
    ),
);

setTimeout(() => {
    store.dispatch({
        type: ClientActionType.LoadingComplete,
    });
}, 1000);

ReactDOM.render(
    <Provider store={store}>
            <App/>
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
