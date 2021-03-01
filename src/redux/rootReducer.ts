import {combineReducers} from 'redux'

import {postsReducer as posts} from './posts/postsReducer'
import {userReducer as user} from './user/userReducer'

export const rootReducer = combineReducers({
    posts,
    user
  }
)
