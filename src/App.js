import React, { useState, useEffect } from 'react';
import './App.css';

function View(props) {
  return <div>{props.display}</div>;
}

function Button(props) {
  return (
    <button className={props.class} onClick={props.onClick}>
      {props.name}
    </button>
  );
}

function ButtonList(props) {
  const renderNumButton = (name) => {
    return (
      <Button onClick={() => props.onNumClick(name)} name={name} class="num" />
    );
  };

  const renderActionButton = (action) => {
    return (
      <Button
        onClick={() => props.onActionClick(action)}
        name={action}
        class="action"
      />
    );
  };

  return (
    <>
      <div id="button-list">
        {renderActionButton('AC')}
        {renderActionButton('+/-')}
        {renderActionButton('%')}
        {renderActionButton('÷')}
        {renderNumButton('7')}
        {renderNumButton('8')}
        {renderNumButton('9')}
        {renderActionButton('x')}
        {renderNumButton('4')}
        {renderNumButton('5')}
        {renderNumButton('6')}
        {renderActionButton('-')}
        {renderNumButton('1')}
        {renderNumButton('2')}
        {renderNumButton('3')}
        {renderActionButton('+')}
        {renderNumButton('0')}
        {renderNumButton('.')}
        {renderActionButton('=')}
      </div>
    </>
  );
}

function App() {
  const [display, setDisplay] = useState(0);
  const [action, setAction] = useState(null);

  const handleNumClick = (val) => {
    if (val === 'AC' || val === 'C') {
      setDisplay(0);
    } else if (val.match(/\d/)) {
      const num = parseInt(val);
      setDisplay(display * 10 + num);
    } else if (val === '.') {
      setDisplay(display + '.');
    } else if (val.match(/\D/) && val !== '.') {
      setAction(val);
    }
  };

  const handleActionClick = (action) => {};

  return (
    <>
      <div className=".App">
        <View display={display} />
        <ButtonList
          onNumClick={(name) => handleNumClick(name)}
          onActionClick={(action) => handleActionClick(action)}
        />
      </div>
    </>
  );
}

export default App;
