import styles from './PostAuthor.module.scss';

import React, {FC} from 'react';
import classNames from 'classnames';

import Avatar from '../Avatar/Avatar';
import Typography from '../Typography/Typography';
import {Post} from '../../types/Post';
import {dateWithTimeFromTimestamp} from '../../utils/dateTimeUtils';

type PropTypes = {
  className?: string;
  isShowPostedDate?: boolean;
  post: Post;
};

const PostAuthor: FC<PropTypes> = ({className, post, isShowPostedDate}: PropTypes) => (
  <div className={classNames(styles.postAuthor, className)}>
    <Avatar size='small' photoUrl={post.authorShortcut.photoUrl}/>
    <div className={styles.postedInfo}>
      <Typography text={post.authorShortcut.name} color='secondary' size='medium'/>
      {isShowPostedDate && <Typography text={dateWithTimeFromTimestamp(post.createdAt)} color='primary' size='small'/>}
    </div>
  </div>
);

PostAuthor.defaultProps = {
  isShowPostedDate: false
}

export default PostAuthor;
