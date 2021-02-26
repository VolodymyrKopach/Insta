import './Stories.scss';

import React, {FC} from 'react';
import classNames from 'classnames';

import Avatar from '../Avatar/Avatar';
import {stories} from '../../data/stories';

type PropTypes = {
  className?: string;
};

const Stories: FC<PropTypes> = ({className} : PropTypes) => (
  <div className={classNames('stories', className)}>
    {stories.map((story, index) => (
      <Avatar className='story' size='medium' photoUrl={story.author.photoUrl}/>
    ))}
  </div>
);

export default Stories;
