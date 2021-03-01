import {Author} from './Author';

export interface Comment {
  authorShortcut: Author
  text: string;
  createdAt: number;
  likes: number;
}