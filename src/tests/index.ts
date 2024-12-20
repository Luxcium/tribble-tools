import { User, Post, Comment } from '../types';
import { addUser, getUser, updateUser, deleteUser } from '../helpers';
import { addPost, getPost, updatePost, deletePost } from '../helpers';
import { addComment, getComment, updateComment, deleteComment } from '../helpers';

describe('User Management', () => {
  it('should add a new user', () => {
    const user: User = {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    addUser(user);
    const retrievedUser = getUser(user.id);
    expect(retrievedUser).toEqual(user);
  });

  it('should update an existing user', () => {
    const user: User = {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    addUser(user);
    user.name = 'Jane Doe';
    updateUser(user);
    const updatedUser = getUser(user.id);
    expect(updatedUser.name).toBe('Jane Doe');
  });

  it('should delete a user', () => {
    const user: User = {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    addUser(user);
    deleteUser(user.id);
    const deletedUser = getUser(user.id);
    expect(deletedUser).toBeUndefined();
  });
});

describe('Post Management', () => {
  it('should add a new post', () => {
    const post: Post = {
      id: '1',
      title: 'First Post',
      content: 'This is the content of the first post.',
      authorId: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    addPost(post);
    const retrievedPost = getPost(post.id);
    expect(retrievedPost).toEqual(post);
  });

  it('should update an existing post', () => {
    const post: Post = {
      id: '1',
      title: 'First Post',
      content: 'This is the content of the first post.',
      authorId: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    addPost(post);
    post.title = 'Updated Post';
    updatePost(post);
    const updatedPost = getPost(post.id);
    expect(updatedPost.title).toBe('Updated Post');
  });

  it('should delete a post', () => {
    const post: Post = {
      id: '1',
      title: 'First Post',
      content: 'This is the content of the first post.',
      authorId: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    addPost(post);
    deletePost(post.id);
    const deletedPost = getPost(post.id);
    expect(deletedPost).toBeUndefined();
  });
});

describe('Comment Management', () => {
  it('should add a new comment', () => {
    const comment: Comment = {
      id: '1',
      postId: '1',
      authorId: '1',
      content: 'This is a comment.',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    addComment(comment);
    const retrievedComment = getComment(comment.id);
    expect(retrievedComment).toEqual(comment);
  });

  it('should update an existing comment', () => {
    const comment: Comment = {
      id: '1',
      postId: '1',
      authorId: '1',
      content: 'This is a comment.',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    addComment(comment);
    comment.content = 'Updated comment.';
    updateComment(comment);
    const updatedComment = getComment(comment.id);
    expect(updatedComment.content).toBe('Updated comment.');
  });

  it('should delete a comment', () => {
    const comment: Comment = {
      id: '1',
      postId: '1',
      authorId: '1',
      content: 'This is a comment.',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    addComment(comment);
    deleteComment(comment.id);
    const deletedComment = getComment(comment.id);
    expect(deletedComment).toBeUndefined();
  });
});
