/**
 * stories 故事collection
 * @author ZhaoMing<zhaoming.me#gmail.com>
 * @date 24/05/2016
 *
 * @PURE
 */

'use strict';

import React, { PropTypes } from 'react';
import Story from './story';

const Stories = ({ stories, onChildClick }) => (
  <ul className="m-storyList">
    {
      stories.map(story =>
        <Story
          key={ story.id }
          { ...story }
          onClick={ () => onChildClick(story.id) }
        />
      )
    }
  </ul>
);

Stories.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    images: PropTypes.string.isRequired,
    hasRead: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onChildClick: PropTypes.func.isRequired
};

export default Stories;