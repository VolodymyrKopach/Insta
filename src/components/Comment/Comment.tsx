import styles from './Comment.module.scss';

import React, {FC} from 'react';

import likeIcon from '../../assets/img/like.svg';
import activeLikeIcon from '../../assets/img/active_like.svg';
import Avatar from '../Avatar/Avatar';
import Typography from '../Typography/Typography';
import {Comment as CommentType} from '../../entities/Comment';
import classNames from 'classnames';

type PropTypes = {
  className?: string;
  comment: CommentType
};

const Comment: FC<PropTypes> = ({comment, className}: PropTypes) => (
  <div className={styles.comment}>
    <div className={classNames(styles.mainInfo, className)}>
      <Avatar size='small' photoUrl={comment.authorShortcut.photoUrl}/>
      <div className={styles.postedInfo}>
        <Typography text={comment.text} color='secondary' size='small'/>
        <div className={styles.infoSection}>
          <Typography text={comment.postedTime} color='primary' size='small'/>
          <Typography text={`${comment.likes} likes`} color='primary' size='small'/>
          <Typography text='reply' color='primary' size='small'/>
        </div>
      </div>
    </div>
    <img
      className={styles.likeIcon}
      src={likeIcon}
      alt='like'/>
  </div>
);

export default Comment;