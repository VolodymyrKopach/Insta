import {Post} from '../types/Post';
import {User} from '../types/User';
import {Comment} from '../types/Comment'

export type GlobalState = {
  posts: {
    posts: Array<Post>
  },
  user: {
    user: User
  }
};

export type PostsState = {
  posts: Array<Post>
};

export type UserState = {
  user: User
};

export const CREATE_POST = 'CREATE_POST';
export type CreatePostAction = {
  type: typeof CREATE_POST,
  payload: Post
};

export const ADD_COMMENT = 'ADD_COMMENT';
export type AddCommentAction = {
  type: typeof ADD_COMMENT,
  payload: {
    comment: Comment,
    postId: number
  }
};


export type PostsActionTypes =
  | CreatePostAction
  | AddCommentAction;