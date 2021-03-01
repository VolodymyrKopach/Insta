import styles from './PostHeader.module.scss';

import React, {FC} from 'react';

import {Post} from '../../types/Post';
import PostAuthor from '../PostAuthor/PostAuthor';

type PropTypes = {
  post: Post
};

const PostHeader: FC<PropTypes> = ({post}: PropTypes) => (
  <div className={styles.postHeader}>
    <PostAuthor post={post} isShowPostedDate/>
    <div className={styles.optionsIcon}>
      <span className={styles.circle}/>
      <span className={styles.circle}/>
      <span className={styles.circle}/>
    </div>
  </div>
);

export default PostHeader;
