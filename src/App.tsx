import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';
import { Post } from './components/PostInfo/Post';
import { Comment } from './components/CommentInfo/Comment';
import { User } from './components/UserInfo/User';

const posts: Post[] = [];
const comments: Comment[] = commentsFromServer;
const users: User[] = usersFromServer;

postsFromServer.map(postFromServer => {
  posts.push({
    user: users.find(user => user.id === postFromServer.userId),
    id: postFromServer.id,
    title: postFromServer.title,
    body: postFromServer.body,
    comments: comments.filter(comment => comment.postId === postFromServer.id),
  });
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
