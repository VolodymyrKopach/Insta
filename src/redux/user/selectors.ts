import {GlobalState} from '../posts/types';
import {User} from '../../types/User';

export const userSelector = (state: GlobalState): User => {
  return state.user.user;
}