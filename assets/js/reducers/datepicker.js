/**
 * datepicker 選擇日期reducer
 * @author ZhaoMing<zhaoming.me#gmail.com>
 * @date 24/05/2016
 */

'use strict';

import actionType from '../constants';

const formatDate = (d) => {
  let year = d.getFullYear(),
      month = d.getMonth() + 1,
      date = d.getDate();

  if(month < 10) month = '0' + month;
  if(date < 10) date = '0' + date;

  return '' + year + month + date;
};

export default (state = formatDate(new Date()), action) => {
  switch (action.type) {
    case actionType.SELECT_OTHER_DATE:
      return formatDate(action.date);

    default:
      return state;
  }
};