/**
 * story.js
 * @author ZhaoMing<zhaoming.me#gmail.com>
 * @date 24/05/2016
 */

'use strict';

import assign from 'object-assign';
import actionType from '../constants';

export default (state, action) => {
  switch (action.type) {
    case actionType.ADD_STORY:
      return {
        id: action.id,
        images: action.images,
        title: action.title,
        type: action.type,
        hasRead: false
      };
    break;
    
    case actionType.SET_READ_STATUS:
      // debugger;
      if (state.id !== action.id) {
        return state
      }

      return assign({}, state, {
        hasRead: action.hasRead
      });
    break;

    default:
      return state; //undefined
  }
};