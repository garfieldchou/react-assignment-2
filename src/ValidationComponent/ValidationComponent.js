import React from 'react'

const validationComponent = (props) => {
  let result = 'Text too short';
  if (props.textLength >= 5) result = 'Text long enough';

  return (
    <p>{result}</p>
  );
};

export default validationComponent;
