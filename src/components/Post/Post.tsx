import styles from './Post.module.scss';

import React, {FC} from 'react';
import classNames from 'classnames';

import likeIcon from '../../assets/img/like.svg';
import activeLikeIcon from '../../assets/img/active_like.svg';
import commentIcon from '../../assets/img/comment.svg';
import arrowIcon from '../../assets/img/arrow.svg';
import {Post as PostEntity} from '../../types/Post'
import PostHeader from '../PostHeader/PostHeader';
import Typography from '../Typography/Typography';
import ActionButton from '../ActionButton/ActionButton';
import PostModalContainer from '../../containers/PostModalContainer/PostModalContainer';

type PropTypes = {
  className?: string;
  post: PostEntity,
  isLiked: boolean,
  postToOpen: PostEntity | null,
  toggleLike: () => void,
  setPostToOpen: (post: PostEntity) => void,
  onClosePostModal: () => void,
  onOpenPostModal: () => void,
};

const Post: FC<PropTypes> = (
  {
    className,
    post,
    isLiked,
    toggleLike,
    postToOpen,
    setPostToOpen,
    onClosePostModal,
    onOpenPostModal
  }: PropTypes) => {
  return (
    <div className={classNames(styles.post, className)}>
      <PostHeader post={post}/>
      <img
        className={styles.photo}
        src={post.photoUrl}
        alt='post'
        onClick={() => setPostToOpen(post)}/>
      <Typography
        className={styles.description}
        color='primary'
        size='medium'
        text={post.description}/>
      <div className={styles.actions}>
        <div className={styles.leftSection}>
          <ActionButton
            icon={isLiked ? activeLikeIcon : likeIcon}
            iconAlt='like icon'
            buttonText={post.likes.length.toString()}
            onClick={toggleLike}/>
          <ActionButton
            className={styles.commentButtonMargin}
            icon={commentIcon}
            iconAlt='comment icon'
            buttonText={post.comments.length.toString()}
            onClick={onOpenPostModal}/>
        </div>
        <ActionButton
          className={styles.commentButtonMargin}
          icon={arrowIcon}
          iconAlt='comment icon'
          buttonText='Share'
          isElementOrderReverse/>
      </div>
      {postToOpen && <PostModalContainer post={post} onClose={onClosePostModal}/>}
    </div>
  );
}

export default Post;
