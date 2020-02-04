import React, { useState } from 'react';

import { ToolHeader } from './ToolHeader';

export const ColorTool = (props) => {

  const [colors, setColors] = useState(props.colors.concat());

  const [colorForm, setColorForm] = useState({
    name: '',
    hexcode: '',
  } /* used on the initial render only */);

  const change = (e) => {
    setColorForm({
      ...colorForm,
      [e.target.name]: e.target.value,
    });
  };

  const addColor = () => {

    setColors(colors.concat({
      ...colorForm,
      id: Math.max(...colors.map(x => x.id), 0) + 1,
    }));

    setColorForm({
      name: '', hexcode: '',
    });

  };

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ul>
        {colors.map(color =>
          <li key={color.id}>{color.name}</li>)}
      </ul>
      <form>
        <h2>Color Form</h2>
        <div>
          {/* React.createElement('label', { htmlFor: 'name-input' }, 'Name:') */}
          <label htmlFor="name-input">Name:</label>
          <input type="text" id="name-input" name="name"
            value={colorForm.name} onChange={change} />
        </div>
        <div>
          {/* React.createElement('label', { htmlFor: 'name-input' }, 'Name:') */}
          <label htmlFor="hexcode-input">Hexcode:</label>
          <input type="text" id="hexcode-input" name="hexcode"
            value={colorForm.hexcode} onChange={change} />
        </div>

        <button type="button" onClick={addColor}>Add Color</button>
      </form>
    </>
  );

};


