import {Author} from './Author';
import {Comment} from './Comment';
import {Like} from './Like';

export interface Post {
  id: number,
  photoUrl: string;
  description: string;
  comments: Array<Comment>;
  createdAt: number;
  likes: Array<Like>;
  authorShortcut: Author;
}