import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from './reducers';
import {App} from './App';
import {Provider} from 'react-redux';
import {createEpicMiddleware} from 'redux-observable';
import {rootEpic} from './epics';
import './index.css';

const epicMiddleware = createEpicMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
