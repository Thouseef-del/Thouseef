import React from 'react';
import './GridItem.css'; // Import CSS for styling

const GridItem = ({ children }) => {
  return (
    <div className="grid-item">
      {children}
    </div>
  );
};

export default GridItem;
