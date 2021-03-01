import React, {FC} from 'react';
import {useSelector} from 'react-redux';

import MainInfo from '../../components/MainInfo/MainInfo';

import {Post as PostEntity} from '../../types/Post'
import {postsSelector} from '../../redux/posts/selectors';

const MainInfoContainer: FC = () => {
  const posts: Array<PostEntity> = useSelector(postsSelector);

  return (
    <MainInfo posts={posts}/>
  );
}

export default MainInfoContainer;
