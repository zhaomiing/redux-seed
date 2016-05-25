/**
 * index.js root
 * @author ZhaoMing<zhaoming.me#gmail.com>
 * @date 24/05/2016
 *
 * @PURE
 */

'use strict';

import React, { Component, PropTypes } from 'react';
import DatepickerContainer  from '../containers/datepickerContainer';
import StoriesContainer from '../containers/StoriesContainer';
import actionTypes from '../actions/actionCreator';

class App extends Component {
  componentDidMount() {
    const { dispatch, date } = this.props;
    dispatch(actionTypes.DO_REQUEST(date));
  }
  
  componentWillReceiveProps(nextProps) {
    if(nextProps.date == this.props.date) return;

    const { dispatch, date } = nextProps;
    dispatch(actionTypes.DO_REQUEST(date));
  }

  render() {
    return (
        <div>
          <h1>知乎日报</h1>
          <DatepickerContainer />
          <StoriesContainer />
          <p className="m-footer">Powered by Redux</p>
        </div>
    );
  }
}

App.propTypes = {
  date: PropTypes.string.isRequired,
  stories: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    stories: PropTypes.array.isRequired
  }),
  dispatch: PropTypes.func.isRequired
};

export default App;
