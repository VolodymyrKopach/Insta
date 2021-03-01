import {Post} from '../../types/Post';
import {Comment} from '../../types/Comment'
import {
  ADD_COMMENT,
  ADD_LIKE,
  CREATE_POST,
  DELETE_LIKE,
  PostsActionTypes
} from './types';
import {Like} from '../../types/Like';

export function createPostAction(post: Post): PostsActionTypes {
  return {
    type: CREATE_POST,
    payload: post
  }
}

export function addCommentAction(payload: { comment: Comment, postId: number }): PostsActionTypes {
  return {
    type: ADD_COMMENT,
    payload: payload
  }
}

export function addLikeAction(payload: { like: Like, postId: number }): PostsActionTypes {
  return {
    type: ADD_LIKE,
    payload: payload
  }
}

export function deleteLikeAction(payload: { like: Like, postId: number }): PostsActionTypes {
  return {
    type: DELETE_LIKE,
    payload: payload
  }
}