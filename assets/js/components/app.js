/**
 * index.js root
 * @author ZhaoMing<zhaoming.me#gmail.com>
 * @date 24/05/2016
 *
 * @PURE
 */

'use strict';

import React from 'react';
import DatepickerContainer  from '../containers/datepickerContainer';
import StoriesContainer from '../containers/StoriesContainer';

console.log(DatepickerContainer);

export default () => {
  return (
      <div>
        <h1>Thinking in Redux</h1>
        <DatepickerContainer />
        <StoriesContainer />
      </div>
  );
};