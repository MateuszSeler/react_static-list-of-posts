import React from 'react';
import { Post } from '../PostInfo/Post';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return posts.map(post => <PostInfo key={post.id} post={post} />);
};
