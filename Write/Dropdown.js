import React, { useState } from 'react';

function Dropdown() {
  const [selected, setSelected] = useState('');
  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div>
      <label>Choose an option:</label>
      <select value={selected} onChange={handleChange}>
        <option value="" disabled>Select an option</option>
        {options.map((option, index) => (
          <option key={index} >{option}</option>
        ))}
      </select>
      {selected && <p>Selected: {selected}</p>}
    </div>
  );
}

export default Dropdown;

