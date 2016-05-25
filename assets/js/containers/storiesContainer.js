/**
 * storiesContainer 文章collection
 * @author ZhaoMing<zhaoming.me#gmail.com>
 * @date 24/05/2016
 */

'use strict';

import { connect } from 'react-redux';
import Stories from '../components/stories';
import actionCreator from '../actions/actionCreator';

const mapStateToProps = (state) => {
  return {
    stories: state.stories.stories,
    loading: state.stories.loading
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChildClick: (id) => {
      // debugger;
      dispatch(actionCreator.SET_READ_STATUS(id));
    },

    deleteChildBtn: (id) => {
      dispatch(actionCreator.DELETE_STORY(id));
    }
  }
};

const StoriesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Stories);

export default StoriesContainer;
