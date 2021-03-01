import {AuthorShortcut} from './AuthorShortcut';

export interface Comment {
  authorShortcut: AuthorShortcut
  text: string;
  createdAt: number;
  likes: number;
}