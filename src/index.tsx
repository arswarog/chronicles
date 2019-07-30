import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import { compose, createStore } from 'redux';
import App from './App';
import { HeroesModule, List, View } from './Heroes';
import { routerMiddleware } from './middlewares/router.middleware';
import { ClientActionType } from './_reducer/client.reducer';
import { routes } from './routes';
import * as serviceWorker from './serviceWorker';
import { globalReducer } from './_reducer';
import { applyMiddleware } from 'redux';
import { history } from './history';

const store = createStore(
    globalReducer,
    {},
    compose(
        applyMiddleware(
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
        <BrowserRouter>
            <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */}
                <Route component={App}/>
                <Route path="/heroes" component={HeroesModule}/>
            </ConnectedRouter>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
