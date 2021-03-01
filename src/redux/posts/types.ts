import {Post} from '../../types/Post';
import {User} from '../../types/User';
import {Comment} from '../../types/Comment'
import {Like} from '../../types/Like';

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

export const ADD_LIKE = 'ADD_LIKE';
export type AddLikeAction = {
  type: typeof ADD_LIKE,
  payload: {
    like: Like,
    postId: number
  }
};

export const DELETE_LIKE = 'DELETE_LIKE';
export type DeleteLikeAction = {
  type: typeof DELETE_LIKE,
  payload: {
    like: Like,
    postId: number
  }
};

export type PostsActionTypes =
  | CreatePostAction
  | AddCommentAction
  | AddLikeAction
  | DeleteLikeAction;