import styles from './Typography.module.scss';

import React, {FC} from 'react';
import classNames from 'classnames';

type PropTypes = {
  className?: string;
  size: 'small' | 'medium' | 'large';
  color: 'primary' | 'secondary' | 'white';
  text: string;
};

const Typography: FC<PropTypes> = ({className, size, color, text}: PropTypes) => (
  <p className={classNames(styles.typography, styles[color], styles[size], className)}>{text}</p>
);

export default Typography;
