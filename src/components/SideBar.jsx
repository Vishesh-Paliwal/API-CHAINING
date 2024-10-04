import React, { useState } from 'react';

function SideBar() {
  const [activeButton, setActiveButton] = useState('Test Status');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const getButtonClasses = (buttonName) => {
    return `text-white w-screen h-12 transition-colors duration-300 ${
      activeButton === buttonName
        ? 'text-purple-500 bg-green-300'
        : 'hover:text-purple-500 hover:bg-green-300'
    }`;
  };

  return (
    <div className="w-1/5 h-full bg-black flex flex-col justify-between">
      <div className="text-center py-4 text-4xl font-bold">Devzery</div>
      <div className="flex-grow flex flex-col items-center py-64">
        <button className={getButtonClasses('Test Status')} onClick={() => handleButtonClick('Test Status')}>
          Test Status
        </button>
        <button className={getButtonClasses('API Overview')} onClick={() => handleButtonClick('API Overview')}>
          API Overview
        </button>
        <button className={getButtonClasses('Bug Tracker')} onClick={() => handleButtonClick('Bug Tracker')}>
          Bug Tracker
        </button>
        <button className={getButtonClasses('Integration')} onClick={() => handleButtonClick('Integration')}>
          Integration
        </button>
        <button className={getButtonClasses('Settings')} onClick={() => handleButtonClick('Settings')}>
          Settings
        </button>
      </div>
      <div className="text-center py-4">
        <button className="text-white">Logout</button>
      </div>
    </div>
  );
}

export default SideBar;
