import styles from './UserInfo.module.scss';

import React, {FC} from 'react';
import classNames from 'classnames';

import Avatar from '../Avatar/Avatar';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import {user} from '../../data/user';
import CreatePostModal from '../CreatePostModal/CreatePostModal';
import CreatePostModalContainer from '../../containers/CreatePostModalContainer/CreatePostModalContainer';

type PropTypes = {
    className?: string,
    isOpenCreatePostModal: boolean,
    onCloseCreatePostModal: () => void,
    onOpenCreatePostModal: () => void
};

const UserInfo: FC<PropTypes> = (
  {
    className,
    onCloseCreatePostModal,
    onOpenCreatePostModal,
    isOpenCreatePostModal
  } : PropTypes) => (
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
        <Typography text={`${user.name} - ${user.jobTitle} `} color='secondary' size='medium'/>
        <Typography className={styles.description} text={user.description} color='primary' size='small'/>
    </div>
    <div className={styles.actionSection}>
        <Button color='white' text='Edit profile' size='small'/>
        <Button
          className={styles.buttonMargin}
          color='blue'
          size='small'
          text='New post'
          onClick={onOpenCreatePostModal}/>
    </div>

    {isOpenCreatePostModal && <CreatePostModalContainer onClose={onCloseCreatePostModal}/>}
  </div>
);

export default UserInfo;
