import styles from './MainInfo.module.scss';

import React, {FC} from 'react';
import Post from '../Post/Post';
import Stories from '../Stories/Stories';
import {Post as PostEntity} from '../../types/Post'

type PropTypes = {
  posts: Array<PostEntity>
};

const MainInfo: FC<PropTypes> = ({posts}: PropTypes) => (
  <div className={styles.mainInfo}>
    <Stories className={styles.stories}/>
    {posts.sort((a: PostEntity, b: PostEntity) => a.createdAt - b.createdAt).map((post, index) => (
      <Post key={index} post={post}/>
    ))}
  </div>
);

export default MainInfo;
