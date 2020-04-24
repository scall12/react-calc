import React from 'react';

function View(props) {
  const number = props.display || 0;
  return <div id="view">{number}</div>;
}

export default View;
