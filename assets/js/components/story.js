/**
 * story 故事item
 * @author ZhaoMing<zhaoming.me#gmail.com>
 * @date 24/05/2016
 *
 * @PURE
 */

'use strict';

import React, { PropTypes } from 'react';
import classnames from 'classnames';
import CONST from '../constants/const';

const Story = ({ id, images, title, type, hasRead, onClick, deleteBtn }) => (
  <li type={ type } className={classnames({
    's-read': hasRead,
    'm-storyItem': true
    })}
  >
    <a href={ images } target="_blank" rel="noreferrer">［图片］</a>
    <a href={ CONST.URL_PREFIX + id } onClick={ onClick } target="_blank">
      { title }
    </a>
    <span className="i-x" onClick={ deleteBtn }>x</span>
  </li>
);

Story.propTypes = {
  id: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  deleteBtn: PropTypes.func.isRequired,
  hasRead: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Story;