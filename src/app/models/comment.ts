import { User } from './user';
import { Post } from './post';
export class Comment {
  id?: number;
  message?: string;
  post?: Post;
}
