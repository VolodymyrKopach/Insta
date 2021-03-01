import {AuthorShortcut} from './AuthorShortcut';
import {Comment} from './Comment';
import {Like} from './Like';

export type Post = {
  id: number,
  photoUrl: string;
  description: string;
  comments: Array<Comment>;
  createdAt: number;
  likes: Array<Like>;
  authorShortcut: AuthorShortcut;
}