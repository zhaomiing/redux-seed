/**
 * actionCreator 動作生成器
 * @author ZhaoMing<zhaoming.me#gmail.com>
 * @date 24/05/2016
 */

const actionCreator = {
  SET_READ_STATUS(id) {
    return {
      type: 'SET_READ_STATUS',
      hasRead: true,
      id
    }
  },
  SELECT_OTHER_DATE(date) {
    return {
      type: 'SELECT_OTHER_DATE',
      date: date
    }
  }
};

export default actionCreator;