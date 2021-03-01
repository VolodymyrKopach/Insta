import {Author} from './Author';

export interface Comment {
  authorShortcut: Author
  text: string;
  postedTime: string;
  likes: number;
}