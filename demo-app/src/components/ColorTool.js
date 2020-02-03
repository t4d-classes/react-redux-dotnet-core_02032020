import React, { useState } from 'react';

export const ColorTool = (props) => {

    const [ colorForm, setColorForm ] = useState({
        name: '',
        hexcode: '',
    } /* used on the initial render only */);

    const change = (e) => {
        setColorForm({
            ...colorForm,
            [ e.target.name ]: e.target.value,
        });
    };

    console.log(colorForm);

    return (
        <>
            <header>
                <h1>Color Tool</h1>
            </header>
            <ul>
                {props.colors.map(color =>
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
            </form>
        </>
    );

};


