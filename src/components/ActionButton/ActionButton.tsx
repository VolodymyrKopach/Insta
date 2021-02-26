import './ActionButton.scss';

import React, { FC } from 'react';
import classNames from 'classnames';

import Typography from '../Typography/Typography';

type PropTypes = {
  className?: string;
  isElementOrderReverse?: boolean,
  icon: string,
  iconAlt: string,
  buttonText: string,
  children?: never;
};

const ActionButton: FC<PropTypes> = ({className, icon, iconAlt, isElementOrderReverse, buttonText} : PropTypes) => (
  <div className={
    classNames(
      'action-button',
      {'action-button-reverse': isElementOrderReverse},
      {'action-button-normal': !isElementOrderReverse},
      className)}>
    <img
      className={classNames('action-button-icon')}
      src={icon}
      alt={iconAlt}/>
    <Typography className='action-button-text' text={buttonText} color='secondary' size='medium'/>
  </div>
);

export default ActionButton;
