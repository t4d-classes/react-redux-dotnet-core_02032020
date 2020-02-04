import React, { useState } from 'react';


export const ColorForm = ({ buttonText, onSubmitColor }) => {

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

  const submitColor = () => {

    onSubmitColor(colorForm);

    setColorForm({
      name: '', hexcode: '',
    });
  }

  return <form>
    <h2>Color Form</h2>
    <div>
      <label htmlFor="name-input">Name:</label>
      <input type="text" id="name-input" name="name"
        value={colorForm.name} onChange={change} />
    </div>
    <div>
      <label htmlFor="hexcode-input">Hexcode:</label>
      <input type="text" id="hexcode-input" name="hexcode"
        value={colorForm.hexcode} onChange={change} />
    </div>

    <button type="button" onClick={submitColor}>{buttonText}</button>
  </form>;
};

ColorForm.defaultProps = {
  buttonText: 'Submit Color',
};
