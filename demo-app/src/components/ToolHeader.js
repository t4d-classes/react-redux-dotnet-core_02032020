import React, { memo } from 'react';


// const memo = (fn) => {

//   const cache = createCache();

//   return (...params) => {

//     if (cacheHasParams(params)) {
//       return cache(params);
//     }

//     cache[params] = fn(...params);;

//     cache(params)

//   };

// }

export const ToolHeader = memo((props) => {

  console.log('rendered tool header');

  return <header>
    <h1>{props.headerText}</h1>
  </header>;
});
