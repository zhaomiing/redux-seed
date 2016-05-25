/**
 * app.js
 * @author ZhaoMing<zhaoming.me#gmail.com>
 * @date 23/05/2016
 */

'use strict';

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import appReducer from '../reducers';
import AppContainer from '../containers/appContainer';
import '../../sass/main.scss';

let store = createStore(
    appReducer,
    compose(
        applyMiddleware(thunkMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

render(
    <Provider store={store}>
      <AppContainer />
    </Provider>,
    document.getElementById('j-app')
);