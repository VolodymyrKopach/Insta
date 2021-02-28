import styles from './UserInfo.module.scss';

import React, {FC} from 'react';
import classNames from 'classnames';

import Avatar from '../Avatar/Avatar';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import {user} from '../../data/user';

type PropTypes = {
    className?: string;
};

const UserInfo: FC<PropTypes> = ({className} : PropTypes) => (
  <div className={classNames(styles.userInfo, className)}>
    <div className={styles.followersSection}>
        <div className={styles.followInfo}>
            <Typography text={user.followers.toString()} color='secondary' size='medium'/>
            <Typography text='Followers' color='primary' size='medium'/>
        </div>
        <Avatar className={styles.avatar} size='large' photoUrl={user.photoUrl}/>
        <div className={styles.followInfo}>
            <Typography text={user.following.toString()} color='secondary' size='medium'/>
            <Typography text='Following' color='primary' size='medium'/>
        </div>
    </div>
    <div className={styles.titleSection}>
        <Typography text={user.title} color='secondary' size='medium'/>
        <Typography className={styles.description} text={user.description} color='primary' size='small'/>
    </div>
    <div className={styles.actionSection}>
        <Button color='white' text='Edit profile'/>
        <Button className={styles.buttonMargin} color='blue' text='New post'/>
    </div>
  </div>
);

export default UserInfo;
