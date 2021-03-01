import {User} from '../../types/User';

export type UserState = {
  user: User
};

export const EDIT_USER = 'EDIT_USER';
export type EditUserAction = {
  type: typeof EDIT_USER,
  payload: {
    updatedUser: User
  }
};