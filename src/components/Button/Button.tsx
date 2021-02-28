import styles from './Button.module.scss';

import React, {FC} from 'react';
import classNames from 'classnames';

type PropTypes = {
  className?: string,
  color: 'black' | 'blue' | 'white',
  text: string
};

const Button: FC<PropTypes> = ({className, color, text}: PropTypes) => (
  <button className={classNames(styles.button, styles[color], className)}>
    {text}
  </button>
);

export default Button;
