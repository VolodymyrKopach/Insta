import styles from './PostModal.module.scss';

import React, {FC} from 'react';
import classNames from 'classnames';

import likeIcon from '../../assets/img/like.svg';
import PostAuthor from '../PostAuthor/PostAuthor';
import {Post} from '../../types/Post';
import Divider from '../Divider/Divider';
import Comment from '../Comment/Comment';
import ActionButton from '../ActionButton/ActionButton';

type PropTypes = {
  className?: string,
  comment?: string,
  post: Post,
  onClose: () => void,
  onAddComment: () => void,
  onChangeComment: (event: any) => void
};

const PostModal: FC<PropTypes> = ({post, onClose, onAddComment, onChangeComment, comment}: PropTypes) => (
  <div className={styles.container}>
    <div className={styles.postModal}>
      <img
        className={classNames(styles.postPhoto)}
        src={post.photoUrl}
        alt='post photo'/>
      <div className={styles.infoSection}>
        <div className={styles.modalHeaderSection}>
          <PostAuthor post={post}/>
          <div className={styles.closeIconElement} onClick={onClose}/>
        </div>
        <Divider/>
        <div className={styles.commentsSection}>
          {post.comments.map((comment, index) => (
            <Comment key={index} className={styles.comment} comment={comment}/>
          ))}
        </div>
        <Divider/>
        <div className={styles.likesSection}>
          <ActionButton buttonText={post.likes.length.toString()} iconAlt='like' icon={likeIcon}/>
        </div>
        <Divider/>
        <div className={styles.addCommentSection}>
          <input
            className={styles.commentInput}
            onChange={onChangeComment}
            value={comment}
            type='text'
            placeholder='Add a comment...'/>
          <div className={styles.sendButton} onClick={onAddComment}>Send</div>
        </div>
      </div>
    </div>
  </div>
);

export default PostModal;
