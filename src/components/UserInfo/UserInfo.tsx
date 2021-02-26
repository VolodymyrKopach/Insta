import './UserInfo.scss';

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
  <div className={classNames('user-info', className)}>
    <div className='user-info-followers-section'>
        <div className='follow-info'>
            <Typography text={user.followers.toString()} color='secondary' size='medium'/>
            <Typography text='Followers' color='primary' size='medium'/>
        </div>
        <Avatar className='avatar' size='large' photoUrl={user.photoUrl}/>
        <div className='follow-info'>
            <Typography text={user.following.toString()} color='secondary' size='medium'/>
            <Typography text='Following' color='primary' size='medium'/>
        </div>
    </div>
    <div className='user-info-title-section'>
        <Typography text={user.title} color='secondary' size='medium'/>
        <Typography className='user-info-description' text={user.description} color='primary' size='small'/>
    </div>
    <div className='user-info-action-section'>
        <Button color='white' text='Edit profile'/>
        <Button className='button-margin' color='blue' text='New post'/>
    </div>
  </div>
);

export default UserInfo;
