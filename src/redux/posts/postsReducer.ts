import {ADD_COMMENT, CREATE_POST, PostsActionTypes, PostsState} from '../types'
import {posts} from '../../data/posts';

const postsInitialState: PostsState = {
  posts: posts
}

export const postsReducer = (state = postsInitialState, action: PostsActionTypes) => {

  switch (action.type) {
    case CREATE_POST:
      return {...state, posts: state.posts.concat([action.payload])}
    case ADD_COMMENT:
      return {
        ...state,
        posts: state.posts.map(
          (post, index) => post.id === action.payload.postId
            ? {...post, comments: [...post.comments, action.payload.comment]}
            : post
        )
      }
    default:
      return state
  }
}
