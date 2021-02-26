import './Post.scss';

import React, {FC} from 'react';
import classNames from 'classnames';

import likeIcon from '../../assets/img/like.svg';
import commentIcon from '../../assets/img/comment.svg';
import arrowIcon from '../../assets/img/arrow.svg';
import {Post as PostEntity} from '../../entities/Post'
import PostHeader from '../PostHeader/PostHeader';
import Typography from '../Typography/Typography';
import ActionButton from '../ActionButton/ActionButton';


type PropTypes = {
  className?: string;
  post: PostEntity
};

const Post: FC<PropTypes> = ({className, post} : PropTypes) => (
  <div className={classNames('post', className)}>
    <PostHeader post={post}/>
    <img
      className='post-photo'
      src={post.photoUrl}
      alt='post'/>
    <Typography
      className='post-description'
      color='primary'
      size='medium'
      text={post.description}/>
    <div className='post-actions'>
      <div className='post-actions-left-section'>
        <ActionButton icon={likeIcon} iconAlt='like icon' buttonText={post.likes.toString()}/>
        <ActionButton
          className='comment-button-margin'
          icon={commentIcon}
          iconAlt='comment icon'
          buttonText={post.comments.toString()}/>
      </div>
      <ActionButton
        className='comment-button-margin'
        icon={arrowIcon}
        iconAlt='comment icon'
        buttonText='Share'
        isElementOrderReverse/>
    </div>
  </div>
);

export default Post;
