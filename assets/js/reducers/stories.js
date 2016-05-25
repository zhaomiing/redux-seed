/**
 * stories
 * @author ZhaoMing<zhaoming.me#gmail.com>
 * @date 24/05/2016
 */

'use strict';

import _ from 'lodash';
import actionType from '../constants';
import assign from 'object-assign';
import storyReducer from './story';

const initState = {
  loading: false,
  stories: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionType.DELETE_STORY:
      let stories = state.stories.slice();
      
      _.remove(stories, (item) => {
        return item['id'] == action.id;
      });

      return assign({}, state, { stories });
    break;

    case actionType.SET_READ_STATUS:
      return state.stories.map(story => {
        return storyReducer(story, action);
      });

    case actionType.REQUEST_POSTS:
      return assign({}, state, {
        loading: true
      });

    case actionType.RECEIVE_POSTS:
      return assign({}, state, {
        loading: false
      });

    default: 
      return state;
  }
}