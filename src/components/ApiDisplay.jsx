import React from 'react';

const ApiDisplay = ({ data, loading, error }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4">
      {data && (
        <div>
          <h2>Users:</h2>
          <pre>{JSON.stringify(data.users, null, 2)}</pre>

          <h2>Post:</h2>
          <pre>{JSON.stringify(data.post, null, 2)}</pre>

          <h2>Comments:</h2>
          <pre>{JSON.stringify(data.comments, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ApiDisplay;
