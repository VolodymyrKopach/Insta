import {
  ADD_COMMENT,
  ADD_LIKE,
  CREATE_POST,
  DELETE_LIKE,
  PostsActionTypes,
  PostsState
} from './types'
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
    case ADD_LIKE:
      return {
        ...state,
        posts: state.posts.map(
          (post, index) => post.id === action.payload.postId
            ? {...post, likes: [...post.likes, action.payload.like]}
            : post
        )
      }
    case DELETE_LIKE:
      return {
        ...state,
        posts: state.posts.map(
          (post, index) => post.id === action.payload.postId
            ? {...post, likes: post.likes.filter((Like, i) =>
                Like.authorShortcut.id !== action.payload.like.authorShortcut.id)}
            : post
        )
      }
    default:
      return state
  }
}
