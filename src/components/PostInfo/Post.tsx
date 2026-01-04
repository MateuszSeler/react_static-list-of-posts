import { Comment } from '../CommentInfo/Comment';
import { User } from '../UserInfo/User';

export interface Post {
  user: User;
  id: number;
  title: string;
  body: string;
  comments: Comment[];
}
