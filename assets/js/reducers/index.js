/**
 * index.js AppReducer
 * @author ZhaoMing<zhaoming.me#gmail.com>
 * @date 24/05/2016
 */

'use strict';

import { combineReducers } from 'redux';
import datepickerReducer from './datepicker';
import storiesReducer from './stories';

const appReducer = combineReducers({
  date: datepickerReducer,
  stories: storiesReducer
});

export default appReducer;