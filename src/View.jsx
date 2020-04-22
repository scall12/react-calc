import React from 'react';
import { numify } from './helpers';

function View(props) {
  const number = numify(props.display) || 0;
  return <div>{number}</div>;
}

export default View;
