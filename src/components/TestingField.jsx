import React, { useState } from 'react';
import { getUsers, createPost, getCommentsByPostId } from '../api/apiService';

function TestingField() {
  // State management
  const [requestBody, setRequestBody] = useState('');
  const [expectedResponse, setExpectedResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handlers for each API call
  const executeGetUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      setRequestBody("No request body required for GET /users");
      const response = await getUsers();
      setExpectedResponse(JSON.stringify(response.data, null, 2));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const executeCreatePost = async () => {
    setLoading(true);
    setError(null);
    const request = {
      title: 'Sample Post',
      body: 'This is a sample post.',
      userId: 1, // Hardcoded userId for now
    };
    try {
      setRequestBody(JSON.stringify(request, null, 2));
      const response = await createPost(request);
      setExpectedResponse(JSON.stringify(response.data, null, 2));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const executeGetCommentsByPostId = async () => {
    setLoading(true);
    setError(null);
    const postId = 1; // Hardcoded postId for simplicity
    try {
      setRequestBody(`GET /comments?postId=${postId}`);
      const response = await getCommentsByPostId(postId);
      setExpectedResponse(JSON.stringify(response.data, null, 2));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-3/5 h-full bg-regal-blue border-yellow-50 border-x-2 p-4 text-white">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl text-pink-400 font-bold">New Testcase</h2>
        <div>
          <button className="bg-pink-400 text-white px-4 py-2 rounded mr-2">Add</button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded">Cancel</button>
        </div>
      </div>

      <div className="flex h-3/4">
        {/* Left Half - Testcase Information */}
        <div className="w-1/2 pr-2">
          <h3 className="text-md font-semibold mb-2">Test Case Title</h3>
          <input
            type="text"
            placeholder="Enter Test Case Title"
            className="w-full bg-gray-700 text-white p-2 mb-4 rounded"
          />
          <h3 className="text-md font-semibold mb-2">Description</h3>
          <textarea
            placeholder="Enter Description"
            className="w-full bg-gray-700 text-white p-2 mb-4 rounded"
            rows="4"
          />
          <h3 className="text-md font-semibold mb-2">API Sequences</h3>
          <div className="bg-gray-600 h-3/4 rounded p-2">
            {/* Buttons for API sequence */}
            <button
              className="w-full bg-blue-500 text-white p-2 mb-2 rounded"
              onClick={executeGetUsers}
              disabled={loading}
            >
              Get Users
            </button>
            <button
              className="w-full bg-green-500 text-white p-2 mb-2 rounded"
              onClick={executeCreatePost}
              disabled={loading}
            >
              Create Post
            </button>
            <button
              className="w-full bg-yellow-500 text-white p-2 mb-2 rounded"
              onClick={executeGetCommentsByPostId}
              disabled={loading}
            >
              Get Comments By Post ID
            </button>
          </div>
        </div>

        {/* Right Half - API Priority and Results */}
        <div className="w-1/2 pl-2">
          <h3 className="text-md font-semibold mb-2">Priority</h3>
          <select className="w-full bg-gray-700 text-yellow-400 p-2 mb-4 rounded">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <h3 className="text-md font-semibold mb-2">Request</h3>
          <div className="bg-gray-600 h-1/2 rounded p-2 mb-4">
            {/* Request Display */}
            <textarea
              placeholder="Request will be displayed here"
              className="w-full h-full bg-gray-600 text-white p-1 rounded"
              value={requestBody}
              readOnly
            />
          </div>

          <h3 className="text-md font-semibold mb-2">Expected Response</h3>
          <div className="bg-gray-600 h-1/2 rounded p-2">
            {/* Expected Response Display */}
            <textarea
              placeholder="Expected response will be displayed here"
              className="w-full h-full bg-gray-600 text-white p-1 rounded"
              value={expectedResponse}
              readOnly
            />
          </div>
        </div>
      </div>

      {loading && <p className="text-yellow-500">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
    </div>
  );
}

export default TestingField;
