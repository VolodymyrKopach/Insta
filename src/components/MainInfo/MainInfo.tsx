import styles from './MainInfo.module.scss';

import React, {FC} from 'react';

import {posts} from '../../data/posts';
import Post from '../Post/Post';
import Stories from '../Stories/Stories';

const MainInfo: FC = () => (
  <div className={styles.mainInfo}>
    <Stories className={styles.stories}/>
    {posts.map((post, index) => (
      <Post key={index} className='post-margin' post={post}/>
    ))}
  </div>
);

export default MainInfo;
