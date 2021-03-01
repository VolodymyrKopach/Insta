import styles from './UserInfo.module.scss';

import React, {FC} from 'react';
import classNames from 'classnames';

import Avatar from '../Avatar/Avatar';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import CreatePostModalContainer from '../../containers/CreatePostModalContainer/CreatePostModalContainer';
import EditUserModalContainer from '../../containers/EditProfileModalContainer/EditProfileModalContainer';
import {User} from '../../types/User';

type PropTypes = {
  className?: string,
  user: User,
  isOpenCreatePostModal: boolean,
  onCloseCreatePostModal: () => void,
  onOpenCreatePostModal: () => void,
  isOpenEditUserModal: boolean,
  onCloseEditUserModal: () => void,
  onOpenEditUserModal: () => void
};

const UserInfo: FC<PropTypes> = (
  {
    className,
    user,
    onCloseCreatePostModal,
    onOpenCreatePostModal,
    isOpenCreatePostModal,
    isOpenEditUserModal,
    onCloseEditUserModal,
    onOpenEditUserModal
  }: PropTypes) => (
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
      <Typography text={`${user.firstName} ${user.lastName} - ${user.jobTitle} `} color='secondary' size='medium'/>
      <Typography className={styles.description} text={user.description} color='primary' size='small'/>
    </div>
    <div className={styles.actionSection}>
      <Button color='white' text='Edit profile' size='small' onClick={onOpenEditUserModal}/>
      <Button
        className={styles.buttonMargin}
        color='blue'
        size='small'
        text='New post'
        onClick={onOpenCreatePostModal}/>
    </div>

    {isOpenCreatePostModal && <CreatePostModalContainer onClose={onCloseCreatePostModal}/>}
    {isOpenEditUserModal && <EditUserModalContainer onClose={onCloseEditUserModal}/>}
  </div>
);

export default UserInfo;
