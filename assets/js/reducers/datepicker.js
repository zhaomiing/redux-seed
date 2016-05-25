/**
 * datepicker 選擇日期reducer
 * @author ZhaoMing<zhaoming.me#gmail.com>
 * @date 24/05/2016
 */

'use strict';

import actionType from '../constants';
import { formatDate } from '../utils';

export default (state = formatDate(new Date()), action) => {
  switch (action.type) {
    case actionType.SELECT_OTHER_DATE:
      return action.date;

    default:
      return state;
  }
};