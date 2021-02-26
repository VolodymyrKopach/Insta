import {Author} from './Author';

export interface Post {
  photoUrl: string;
  description: string;
  comments: number;
  time: string;
  likes: number;
  author: Author;
}