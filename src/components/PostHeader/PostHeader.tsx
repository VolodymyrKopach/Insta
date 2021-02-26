import './PostHeader.scss';

import React, {FC} from 'react';

import Avatar from '../Avatar/Avatar';
import Typography from '../Typography/Typography';
import {Post} from '../../entities/Post';

type PropTypes = {
  post: Post
};

const PostHeader: FC<PropTypes> = ({post}: PropTypes) => (
  <div className='post-header-container'>
    <div className='left-section'>
      <Avatar size='small' photoUrl={post.author.photoUrl}/>
      <div>
        <Typography className='typography-margin' text={post.author.name} color='secondary' size='medium'/>
        <Typography className='typography-margin' text={post.time} color='primary' size='small'/>
      </div>
    </div>
    <div className='options-icon'>
      <span className='options-icon-circle'/>
      <span className='options-icon-circle'/>
      <span className='options-icon-circle'/>
    </div>
  </div>
);

export default PostHeader;
