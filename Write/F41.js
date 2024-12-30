
import React from 'react';

function F41(props) {
  return (
    <div style={{ margin: '10px 0', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
      <p><strong>Task:</strong> {props.name}</p>
      <p>Status: {props.completed ? 'Completed' : 'Not Completed'}</p>
    </div>
  );
}

export default F41;