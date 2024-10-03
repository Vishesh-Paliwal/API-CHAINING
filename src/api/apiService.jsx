import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getUsers = () => api.get('/users');
export const createPost = (data) => api.post('/posts', data);
export const getCommentsByPostId = (postId) => api.get(`/comments?postId=${postId}`);
