import {EDIT_USER, EditUserAction, UserState} from './types'
import {user} from '../../data/user';

const userInitialState: UserState = {
  user: user
}

export const userReducer = (state = userInitialState, action: EditUserAction) => {
  switch (action.type) {
    case EDIT_USER:
      return {
        ...state, user: {...state.user, ...action.payload.updatedUser}
      }
    default:
      return state
  }
}