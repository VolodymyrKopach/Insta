import './Button.scss';

import React, {FC} from 'react';
import classNames from 'classnames';

type PropTypes = {
  className?: string,
  color: 'black' | 'blue' | 'white',
  text: string
};

const Button: FC<PropTypes> = ({className, color, text}: PropTypes) => (
  <button className={classNames('button', `button-${color}`, className)}>
    {text}
  </button>
);

export default Button;
