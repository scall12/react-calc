import React from 'react';
import Button from './Button';

function ButtonList(props) {
  const nameList = 'AC,+/-,%,÷,7,8,9,x,4,5,6,-,1,2,3,+,0,.,=';

  const renderButton = (name) => {
    const type = name % 1 === 0 ? 'num' : 'action';

    return (
      <Button
        onClick={() => props.onClick(name)}
        name={name}
        key={name}
        class={type}
      />
    );
  };

  const listItems = nameList.split(',').map((name) => {
    return renderButton(name);
  });

  return <div id="button-list">{listItems}</div>;
}

export default ButtonList;
