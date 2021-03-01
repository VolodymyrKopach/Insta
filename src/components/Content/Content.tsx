import styles from './Content.module.scss';

import React, {FC} from 'react';

import MainInfoContainer from '../../containers/MainInfoContainer/MainInfoContainer';
import UserInfoContainer from '../../containers/UserInfoContainer/UserInfoContainer';

const Content: FC = () => (
  <div className={styles.content}>
    <MainInfoContainer/>
    <UserInfoContainer className={styles.userInfo}/>
  </div>
);

export default Content;
