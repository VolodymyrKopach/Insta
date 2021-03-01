import {AuthorShortcut} from './AuthorShortcut';

export type Comment = {
  authorShortcut: AuthorShortcut
  text: string;
  createdAt: number;
  likes: number;
}