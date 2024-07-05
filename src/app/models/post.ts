import { User } from './user';
import { Comment } from './comment';
export class Post {
  id?: number;
  message?: string;
  imageUrl?: string;
  author?: User;
  commentIsVisible = false;
  comments?: Comment[];

}
