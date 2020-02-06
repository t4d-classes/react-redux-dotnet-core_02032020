import React, { memo } from 'react';

export const ToolHeader = memo((props) => {
  return <header>
    <h1>{props.headerText}</h1>
  </header>;
});
