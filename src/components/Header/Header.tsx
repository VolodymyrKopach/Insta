import styles from './Header.module.scss';

import React, {FC} from 'react';

import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import {user} from '../../data/user';

const Header: FC = () => (
  <div className={styles.header}>
    <div className={styles.logo}>Linkstagram</div>
    <div className={styles.userSection}>
      <Button color='black' text='Home'/>
      <button className={styles.languageSelector}>EN</button>
      <Avatar size='small' photoUrl={user.photoUrl}/>
    </div>
  </div>
);

export default Header;
