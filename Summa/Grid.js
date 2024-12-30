import React from 'react';
import './Grid.css'; // Import CSS for styling

const Grid = ({ children }) => {
  return (
    <div className="grid">
      {children}
    </div>
  );
};

export default Grid;
