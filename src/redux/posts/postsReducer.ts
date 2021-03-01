import {CREATE_POST, PostsActionTypes, PostsState} from '../types'
import {posts} from '../../data/posts';

const postsInitialState:PostsState = {
  posts: posts
}

export const postsReducer = (state = postsInitialState, action: PostsActionTypes) => {

  switch (action.type) {
    case CREATE_POST:
      return { ...state, posts: state.posts.concat([action.payload])}
    default: return state
  }
}
