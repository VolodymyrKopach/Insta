import moment from 'moment';

export const getCurrentTimestamp: any = () => moment.utc().unix();

export const dateFromTimestamp: any = (timestamp: number) => moment.unix(timestamp).format('DD.MM.YY');

export const timeFromTimestamp: any = (timestamp: number) => moment.unix(timestamp).format('HH:mm');

export const dateWithTimeFromTimestamp: any =
  (timestamp: number) => `${dateFromTimestamp(timestamp)} ${timeFromTimestamp(timestamp)}`;