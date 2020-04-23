import React from 'react';

function View(props) {
  const number = props.display || 0;
  return <div>{number}</div>;
}

export default View;
