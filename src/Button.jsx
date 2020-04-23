import React from 'react';

function Button(props) {
  return (
    <button id={props.name} className={props.class} onClick={props.onClick}>
      {props.name}
    </button>
  );
}

export default Button;
