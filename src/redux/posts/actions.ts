import {Post} from '../../types/Post';
import {CREATE_POST, CreatePostAction} from '../types';

export function createPostAction(post: Post):CreatePostAction {
  return {
    type: CREATE_POST,
    payload: post
  }
}