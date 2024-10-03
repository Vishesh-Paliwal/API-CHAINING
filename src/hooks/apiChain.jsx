import { useState } from 'react';
import { getUsers, createPost, getCommentsByPostId } from '../api/apiService';

const apiChain = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const chainApis = async () => {
    setLoading(true);
    setError(null);
    try {
      const users = await getUsers();
      const firstUser = users.data[1];

      const newPost = await createPost({
        title: 'Sample Post',
        body: 'This is a sample post.',
        userId: firstUser.id,
      });

      const comments = await getCommentsByPostId(newPost.data.userId);
      setData({ users: users.data, post: newPost.data, comments: comments.data });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, chainApis };
};

export default apiChain;
