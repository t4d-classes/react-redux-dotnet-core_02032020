import React, { useState } from 'react';

export const CalcTool = ({ result, history, onAdd, onSubtract, onDeleteEntry }) => {

  const [ numInput, setNumInput ] = useState(0);

  return <form>

    <div>
      Input: <input type="number" onChange={e => setNumInput(Number(e.target.value))} />
    </div>

    <div>
      Result: {result}
    </div>

    <div>
      <button type="button" onClick={() => onAdd(numInput)}>Add</button>
      <button type="button" onClick={() => onSubtract(numInput)}>Subtract</button>
    </div>

    <ol>
      {history.map( (entry, index) =>
        <li key={index}>
          {entry.type} {entry.value}
          <button type="button" onClick={() => onDeleteEntry(index)}>Delete</button>
        </li>)}
    </ol>

    <table>
      <tbody>
        {history.map( (entry, index) =>
          <tr key={index}><td>{entry.type}</td><td>{entry.value}</td></tr>)}
      </tbody>
    </table>

  </form>

};