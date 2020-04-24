import React from 'react';

function Button(props) {
  return (
    <button
      id={props.class + props.name}
      className={props.class}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
}

export default Button;
