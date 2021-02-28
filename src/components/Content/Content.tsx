import styles from './Content.module.scss';

import React, {FC} from 'react';

import MainInfo from '../MainInfo/MainInfo';
import UserInfo from '../UserInfo/UserInfo';

const Content: FC = () => (
  <div className={styles.content}>
    <MainInfo/>
    <UserInfo className={styles.userInfo}/>
  </div>
);

export default Content;
