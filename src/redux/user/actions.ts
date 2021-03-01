import {EDIT_USER, EditUserAction} from './types';
import {User} from '../../types/User';

export function editUserAction(payload: {updatedUser: User }): EditUserAction {
  return {
    type: EDIT_USER,
    payload: payload
  }
}