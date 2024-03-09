// FloatingButton.js
import React, { Component, useState } from 'react';
import Form from './Form'; // Import your form component
import RecommenderModal from './recommenderModal';
const FloatingButton = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleButtonClick = () => {
    // Toggle the visibility of the form
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div>
      {/* Render the form only when isFormVisible is true */}
      {/* {isFormVisible && <RecommenderModal />} */}

      {/* Floating button */}
      {/* <button
        className="fixed mr-2 bottom-32 transform translate-y-1/2 right-4 p-6 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        onClick={handleButtonClick}
      > */}
        {/* Add your button content here */}
      {/* </button> */}
      <RecommenderModal />
    </div>
  );
};

export default FloatingButton;
