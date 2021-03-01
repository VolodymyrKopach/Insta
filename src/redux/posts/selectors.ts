import {GlobalState, PostsState} from '../types';
import {Post} from '../../types/Post';

export const postsSelector = (state: GlobalState): Array<Post> => {
  return state.posts.posts;
}