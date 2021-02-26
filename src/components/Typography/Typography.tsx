import './Typography.scss';

import React, {FC} from 'react';
import classNames from 'classnames';

type PropTypes = {
  className?: string;
  size: 'small' | 'medium' | 'large';
  color: 'primary' | 'secondary';
  text: string;
};

const Typography: FC<PropTypes> = ({className, size, color, text} : PropTypes) => (
  <p className={classNames('typography', `typography--${color}`, `typography--${size}`, className)}>{text}</p>
);

export default Typography;
