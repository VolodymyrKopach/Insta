import './Avatar.scss';

import React, {FC} from 'react';
import classNames from 'classnames';

type PropTypes = {
  className?: string,
  size: 'small' | 'medium' | 'large',
  photoUrl: string
};

const Avatar: FC<PropTypes> = ({size, className, photoUrl}: PropTypes) => (
  <img
    className={classNames('avatar', `avatar--${size}`, className)}
    src={photoUrl}
    alt='avatar'/>
);

export default Avatar;
