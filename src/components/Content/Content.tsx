import './Content.scss';

import React, {FC} from 'react';

import MainInfo from '../MainInfo/MainInfo';
import UserInfo from '../UserInfo/UserInfo';

const Content: FC = () => (
  <div className='content-container'>
    <MainInfo/>
    <UserInfo className='user-info-container'/>
  </div>
);

export default Content;
