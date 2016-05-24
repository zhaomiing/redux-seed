/**
 * stories
 * @author ZhaoMing<zhaoming.me#gmail.com>
 * @date 24/05/2016
 */

'use strict';

import _ from 'lodash';
import actionType from '../constants';
import storyReducer from './story';

export default (state = [
    {
      id: "8254093",
      images: "http://pic1.zhimg.com/71c42b43cb61255362e1a7baebf2cc98.jpg",
      hasRead:false,
      title: "写满了贵的世界级名作，就在这些电影里",
      type: "0"
    }
  ], action) => {
  switch (action.type) {
    case actionType.DELETE_STORY:
      let shadowState = state.slice();
      
      _.remove(shadowState, (item) => {
        return item['id'] == action.id;
      });

      return shadowState;
    break;

    case actionType.SET_READ_STATUS:
      // debugger;
      // debugger;
      return state.map(story => {
        return storyReducer(story, action);
      });

    default: 
      return state;
  }
}