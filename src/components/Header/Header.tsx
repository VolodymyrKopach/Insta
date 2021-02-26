import './Header.scss';

import React, {FC} from 'react';

import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import {user} from '../../data/user';

const Header: FC = () => (
  <div className='header-container'>
    <div className='logo'>Linkstagram</div>
    <div className='user-section'>
      <Button color='black' text='Home'/>
      <button className='language-selector'>EN</button>
      <Avatar size='small' photoUrl={user.photoUrl}/>
    </div>
  </div>
);

export default Header;
