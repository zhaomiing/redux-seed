/**
 * datepickerContainer
 * @author ZhaoMing<zhaoming.me#gmail.com>
 * @date 24/05/2016
 */

import { connect } from 'react-redux';
import Datepicker from '../components/datepicker';
import actionCreator from '../actions/actionCreator';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDateChange: (date) => {
      dispatch(actionCreator.SELECT_OTHER_DATE(date));
    }
  }
};

const DatepickerContainer = connect(mapStateToProps, mapDispatchToProps)(Datepicker);

export default DatepickerContainer;