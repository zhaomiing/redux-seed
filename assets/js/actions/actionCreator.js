/**
 * actionCreator 動作生成器
 * @author ZhaoMing<zhaoming.me#gmail.com>
 * @date 24/05/2016
 */

'use strict';

import fetch from 'isomorphic-fetch';
import config from '../constants/const';

const actionCreator = {
  SET_READ_STATUS(id) {
    return {
      type: 'SET_READ_STATUS',
      hasRead: true,
      id
    }
  },

  DELETE_STORY(id) {
    return {
      type: 'DELETE_STORY',
      id
    }
  },

  SELECT_OTHER_DATE(date) {
    return {
      type: 'SELECT_OTHER_DATE',
      date: date
    }
  },

  RECEIVE_POSTS() {
    return {
      type: 'RECEIVE_POSTS'
    }
  },

  REQUEST_POSTS() {
    return {
      type: 'REQUEST_POSTS'
    }
  },

  DO_REQUEST(date) {
    return (dispatch) => {
      dispatch(this.REQUEST_POSTS());
      console.log(date);
      // 发送请求
      const promise = fetch(config.YAHOO + config.API + date + config.YAHOO_SUFFIX);

      return promise.then(response => {
        dispatch(this.RECEIVE_POSTS());
        // promise object
        return response.json();
      }).then((data) => {
        console.log(data);
        let { stories } = data.query.results.json;

        for(let o of stories) {
          o.hasRead = false;
        }

        dispatch(this.NEW_STORIES(stories));
      });
    }
  },

  NEW_STORIES(arr) {
    return {
      type: 'NEW_STORIES',
      stories: arr
    }
  }
};

export default actionCreator;