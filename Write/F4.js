import React from 'react';

import F41 from './F41';

class F4 extends React.Component {
  render() {
    const tasks = [
      { name: 'Design Project Mockup', completed: true },
      { name: 'Develop API Endpoints', completed: false },
      { name: 'Prepare Presentation', completed: false }
    ];

    return (
      <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '5px', width: '300px', margin: '20px auto' }}>
        <h2>Project Tasks</h2>
        {tasks.map((task, index) => (
          <F41 key={index} name={task.name} completed={task.completed} />
        ))}
      </div>
    );
  }
}

export default F4;

