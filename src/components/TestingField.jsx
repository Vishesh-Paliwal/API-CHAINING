import React, { useState } from 'react';
import { getUsers, createPost, getCommentsByPostId } from '../api/apiService';
import { FaPencilAlt, FaPaperPlane } from 'react-icons/fa'; 

function TestingField() {
  // State management
  const [requestBody, setRequestBody] = useState('');
  const [expectedResponse, setExpectedResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // New state for editing

  // Handlers for each API call
  const executeGetUsers = async () => {
    setLoading(true);
    setError(null);
    setExpectedResponse("Loading...");
    try {
      setRequestBody("No request body required for GET /users");
      const response = await getUsers();
      setExpectedResponse(JSON.stringify(response.data, null, 2));
    } catch (err) {
      setError(err.message);
      setExpectedResponse(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const executeCreatePost = async () => {
    setLoading(true);
    setError(null);
    setExpectedResponse("Loading...");
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
      setExpectedResponse(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const executeGetCommentsByPostId = async (postId = 1) => {
    setLoading(true);
    setError(null);
    setExpectedResponse("Loading...");
    try {
      setRequestBody(`No request body required. Query param used: postId=${postId}`); // Update the request body display
      const response = await getCommentsByPostId(postId);
      setExpectedResponse(JSON.stringify(response.data, null, 2));
    } catch (err) {
      setError(err.message);
      setExpectedResponse(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Handle edit click
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Handle send click (send updated request)
  const handleSendClick = async () => {
    setIsEditing(false); // Disable editing
    setLoading(true);
    setError(null);
    setExpectedResponse("Loading...");

    try {
      // Check if the requestBody contains postId
      if (requestBody.includes('postId')) {
        // Extract the postId from the requestBody
        const postIdMatch = requestBody.match(/postId=(\d+)/);
        if (postIdMatch && postIdMatch[1]) {
          const postId = parseInt(postIdMatch[1], 10);
          await executeGetCommentsByPostId(postId); // Use the new postId to fetch comments
        } else {
          throw new Error("Invalid postId in request body");
        }
      } else {
        // For other types of requests (like createPost)
        const parsedRequest = JSON.parse(requestBody); // Parse only if it's a valid JSON body
        const response = await createPost(parsedRequest); // Resubmit with new data
        setExpectedResponse(JSON.stringify(response.data, null, 2));
      }
    } catch (err) {
      setError(err.message);
      setExpectedResponse(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-3/5 h-full bg-regal-blue border-yellow-50 border-x-2 p-4 text-white">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl text-pink-400 font-bold">New Test Case</h2>
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
            rows="6"
          />
          <h3 className="text-md font-semibold mb-2">API Sequences</h3>
          <div className="bg-gray-700 h-3/4 rounded p-2">
            {/* Buttons for API sequence */}
            <button
              className="w-full bg-regal-blue text-white p-2 mb-2 rounded"
              onClick={executeGetUsers}
              disabled={loading}
            >
              Get Users
            </button>
            <button
              className="w-full bg-regal-blue text-white p-2 mb-2 rounded"
              onClick={executeCreatePost}
              disabled={loading}
            >
              Create Post
            </button>
            <button
              className="w-full bg-regal-blue text-white p-2 mb-2 rounded"
              onClick={() => executeGetCommentsByPostId()}
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
          <div className="bg-gray-600 h-1/2 rounded p-2 mb-4 relative">
            {/* Request Display */}
            <textarea
              placeholder="Request will be displayed here"
              className="w-full h-full bg-gray-600 text-white p-1 rounded"
              value={requestBody}
              readOnly={!isEditing}
              onChange={(e) => setRequestBody(e.target.value)}
            />
            <div className="absolute top-2 right-2 flex space-x-2 p-2">
              <FaPencilAlt
                className="text-yellow-500 cursor-pointer"
                onClick={handleEditClick}
              />
              <FaPaperPlane
                className="text-green-500 cursor-pointer"
                onClick={handleSendClick}
              />
            </div>
          </div>

          <h3 className="text-md font-semibold mb-2">Expected Response</h3>
          <div className="bg-gray-600 h-1/2 rounded p-2">
            {/* Expected Response Display */}
            <textarea
              placeholder="Expected response will be displayed here"
              className="w-full h-full bg-gray-600 text-white p-1 rounded"
              value={loading ? "Loading..." : expectedResponse}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestingField;
