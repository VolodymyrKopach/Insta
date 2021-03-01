import styles from './Button.module.scss';

import React, {FC} from 'react';
import classNames from 'classnames';

type PropTypes = {
  className?: string,
  color: 'black' | 'blue' | 'white',
  size: 'small' | 'large',
  text: string,
  onClick?: () => void
};

const Button: FC<PropTypes> = ({className, color, size, text, onClick}: PropTypes) => (
  <button className={classNames(styles.button, styles[color], styles[size], className)} onClick={onClick}>
    {text}
  </button>
);

export default Button;