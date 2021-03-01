import styles from './Button.module.scss';

import React, {FC} from 'react';
import classNames from 'classnames';

type PropTypes = {
  className?: string,
  color: 'black' | 'blue' | 'white',
  size: 'small' | 'large',
  type?: 'submit' | 'button'
  text: string,
  onClick?: () => void
};

const Button: FC<PropTypes> = ({className, color, size, type, text, onClick}: PropTypes) => (
  <button className={classNames(styles.button, styles[color], styles[size], className)} onClick={onClick} type={type}>
    {text}
  </button>
);


Button.defaultProps = {
  type: 'button'
}

export default Button;