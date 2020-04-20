import React, { useState, useEffect } from 'react';
import './App.css';

function View(props) {
  return <div>{props.display}</div>;
}

function Button(props) {
  return <button onClick={props.onClick}>{props.name}</button>;
}

function ButtonList(props) {
  const renderButton = (name) => {
    return <Button onClick={() => props.onClick(name)} name={name} />;
  };

  return (
    <>
      <div id="button-list">
        {renderButton('AC')}
        {renderButton('+/-')}
        {renderButton('%')}
        {renderButton('÷')}
        {renderButton('7')}
        {renderButton('8')}
        {renderButton('9')}
        {renderButton('x')}
        {renderButton('4')}
        {renderButton('5')}
        {renderButton('6')}
        {renderButton('-')}
        {renderButton('1')}
        {renderButton('2')}
        {renderButton('3')}
        {renderButton('+')}
        {renderButton('0')}
        {renderButton('.')}
        {renderButton('=')}
      </div>
    </>
  );
}

function App() {
  const [num, setNum] = useState(0);

  const handleClick = (val) => {
    console.log(val);
  };

  return (
    <>
      <div className=".App">
        <View display={num} />
        <ButtonList onClick={(name) => handleClick(name)} />
      </div>
    </>
  );
}

export default App;
