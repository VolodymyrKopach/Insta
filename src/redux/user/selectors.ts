import {GlobalState} from '../types';
import {User} from '../../types/User';

export const userSelector = (state: GlobalState): User => {
  return state.user.user;
}