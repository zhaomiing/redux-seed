/**
 * app.js
 * @author ZhaoMing<zhaoming.me#gmail.com>
 * @date 23/05/2016
 */

'use strict';

import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import appReducer from '../reducers';
import App from '../components/app';
import '../../sass/main.scss';

let store = createStore(
    appReducer,
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('j-app')
);