import {UserState} from './types'
import {user} from '../../data/user';

const userInitialState: UserState = {
  user: user
}

export const userReducer = (state = userInitialState) => {
  return state;
}