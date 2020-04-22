import React from 'react';

function ButtonList(props) {
  const nameList = 'AC,+/-,%,/,7,8,9,*,4,5,6,-,1,2,3,+,0,.,=';

  const renderButton = (name) => {
    return <Button onClick={() => props.onClick(name)} name={name} />;
  };

  const listItems = nameList.split(',').map((name) => {
    return renderButton(name);
  });

  return <div id="button-list">{listItems}</div>;
}

export default ButtonList;
