/**
 * datepicker
 * @author ZhaoMing<zhaoming.me#gmail.com>
 * @date 24/05/2016
 */

import React, { PropTypes, Component } from 'react';
import { DatePicker } from 'antd';

class Datepicker extends Component {
  onDateChange(date) {
    this.props.onDateChange(date);
  }

  render() {
    return (
        <DatePicker onChange={ this.onDateChange.bind(this) } />
    )
  }
}

Datepicker.propTypes = {
  onDateChange: PropTypes.func.isRequired
};

export default Datepicker;