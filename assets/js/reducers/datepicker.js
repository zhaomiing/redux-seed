/**
 * datepicker 選擇日期reducer
 * @author ZhaoMing<zhaoming.me#gmail.com>
 * @date 24/05/2016
 */

'use strict';

import actionType from '../constants';

export default (state = '20160505', action) => {
  switch (action.type) {
    case actionType.SELECT_OTHER_DATE:
      return action.date;

    default:
      return state;
  }
};