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
  const renderButton = (name) => {
    return <Button onClick={() => props.onNumClick(name)} name={name} />;
  };

  return (
    <>
      <div id="button-list">
        {renderButton('AC')}
        {renderButton('+/-')}
        {renderButton('%')}
        {renderButton('/')}
        {renderButton('7')}
        {renderButton('8')}
        {renderButton('9')}
        {renderButton('*')}
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
  const [view, setView] = useState([]);
  const [firstNum, setFirstNum] = useState([]);
  const [secondNum, setSecondNum] = useState([]);
  const [action, setAction] = useState(null);

  const handleNumClick = (val) => {
    if (!action) {
      if (val.match(/\d/) || val === '.') {
        const arr = [...firstNum, val];
        setFirstNum(arr);
        setView(arr);
      }
    } else {
      if (val.match(/\d/) || val === '.') {
        const arr = [...secondNum, val];
        setSecondNum(arr);
        setView(arr);
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
      const total = [operator[action](first, second).toString()];
      setView(total);
      setFirstNum(total);
      setSecondNum([]);
      setAction(null);
    }
  };

  return (
    <>
      <div className=".App">
        <View display={firstNum} />
        <View display={secondNum} />
        <View display={view} />
        <ButtonList onClick={(name) => handleNumClick(name)} />
      </div>
    </>
  );
}

export default App;
