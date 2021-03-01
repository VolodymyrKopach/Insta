import {Post} from '../../types/Post';
import {Comment} from '../../types/Comment'
import {ADD_COMMENT, CREATE_POST, PostsActionTypes} from '../types';

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