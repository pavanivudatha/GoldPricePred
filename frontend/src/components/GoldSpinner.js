// components/GoldSpinner.jsx
import React from 'react';

const GoldSpinner = () => {
  return (
    <div className="flex justify-center items-center mt-4">
      <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin shadow-yellow-500 shadow-md"></div>
    </div>
  );
};

export default GoldSpinner;
