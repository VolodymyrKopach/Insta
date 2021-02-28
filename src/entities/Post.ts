import {Author} from './Author';
import {Comment} from './Comment';
import {Like} from './Like';

export interface Post {
  photoUrl: string;
  description: string;
  comments: Array<Comment>;
  time: string;
  likes: Array<Like>;
  authorShortcut: Author;
}