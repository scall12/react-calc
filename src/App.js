import React, { useState } from 'react';
import './App.css';
import { operator, numify } from './helpers';

function View(props) {
  const number = numify(props.display) || 0;
  return <div>{number}</div>;
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
        {renderActionButton('/')}
        {renderNumButton('7')}
        {renderNumButton('8')}
        {renderNumButton('9')}
        {renderActionButton('*')}
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
  const [view, setView] = useState([]);
  const [firstNum, setFirstNum] = useState([]);
  const [secondNum, setSecondNum] = useState([]);
  const [action, setAction] = useState(null);

  const handleNumClick = (val) => {
    if (!action) {
      if (val.match(/\d/) || val === '.') {
        setFirstNum((firstNum) => [...firstNum, val]);
        setView((firstNum) => [...firstNum]);
      }
    } else {
      if (val.match(/\d/) || val === '.') {
        setSecondNum((secondNum) => [...secondNum, val]);
        setView((secondNum) => [...secondNum]);
      }
    }
  };

  const handleActionClick = (val) => {
    if (val === 'AC' || val === 'C') {
      setFirstNum([]);
      setSecondNum([]);
      setView([]);
    } else if ('+-*/'.includes(val)) {
      setAction(val);
    } else if (val === '+/-') {
      if (!action && firstNum[0] !== '-') {
        setFirstNum((firstNum) => ['-', ...firstNum]);
      } else if (!action) {
        setFirstNum((firstNum) => {
          const arr = firstNum.slice(1);
          setFirstNum(arr);
        });
      } else if (action && secondNum[0] !== '-') {
        setSecondNum((secondNum) => ['-', ...secondNum]);
      } else {
        const arr = secondNum.slice(1);
        setSecondNum(arr);
      }
    } else if (val === '=') {
      const first = numify(firstNum);
      const second = numify(secondNum);
      const newThing = [operator[action](first, second).toString()];
      setView(newThing);
      setAction(null);
    }
  };

  return (
    <>
      <div className=".App">
        <View display={firstNum} />
        <View display={secondNum} />
        <View display={view} />
        <ButtonList
          onNumClick={(name) => handleNumClick(name)}
          onActionClick={(action) => handleActionClick(action)}
        />
      </div>
    </>
  );
}

export default App;
