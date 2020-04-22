import React from 'react';

function View(props) {
  const number = numify(props.display) || 0;
  return <div>{number}</div>;
}

export default View;
