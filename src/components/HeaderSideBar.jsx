import React, { useState } from 'react';

function HeaderSideBar() {
  const [headers, setHeaders] = useState([]);

  const addHeader = () => {
    setHeaders([...headers, { name: '', content: '' }]);
  };

  const handleInputChange = (index, field, value) => {
    const newHeaders = [...headers];
    newHeaders[index][field] = value;
    setHeaders(newHeaders);
  };

  return (
    <div className="w-1/5 h-full bg-black p-4 text-white">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={addHeader}
          className="flex items-center bg-green-300 text-pink-400 p-2 rounded w-full justify-center"
        >
          <span className="mr-2">+</span> Add Header
        </button>
      </div>
      <h2 className="text-xl mb-4">Headers</h2>
      <div>
        {headers.map((header, index) => (
          <div key={index} className="mb-4 border border-gray-600 p-2 rounded">
            <input
              type="text"
              placeholder="Header Name"
              value={header.name}
              onChange={(e) => handleInputChange(index, 'name', e.target.value)}
              className="w-full bg-gray-700 text-white p-1 mb-2 rounded"
            />
            <textarea
              placeholder="Content"
              value={header.content}
              onChange={(e) => handleInputChange(index, 'content', e.target.value)}
              className="w-full bg-gray-700 text-white p-1 rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeaderSideBar;
