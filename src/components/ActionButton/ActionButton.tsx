import styles from './ActionButton.module.scss';

import React, {FC} from 'react';
import classNames from 'classnames';

import Typography from '../Typography/Typography';

type PropTypes = {
  className?: string;
  isElementOrderReverse?: boolean,
  icon: string,
  iconAlt: string,
  buttonText: string,
  children?: never;
  onClick?: () => void
};

const ActionButton: FC<PropTypes> = (
  {
    className,
    icon,
    iconAlt,
    isElementOrderReverse,
    buttonText,
    onClick
  }: PropTypes) => (
  <div
    onClick={onClick}
    className={classNames(
      styles.button,
      {[styles.reverse]: isElementOrderReverse},
      {[styles.normal]: !isElementOrderReverse},
      className)}>
    <img
      className={classNames(styles.icon)}
      src={icon}
      alt={iconAlt}/>
    <Typography className={styles.text} text={buttonText} color='secondary' size='medium'/>
  </div>
);

ActionButton.defaultProps = {
  onClick: () => {
  }
}

export default ActionButton;
