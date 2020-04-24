import React, { useState } from 'react';
import './App.css';
import { calculate } from './helpers';

import View from './View';
import ButtonList from './ButtonList';

function App() {
  const [view, setView] = useState('');
  const [firstNum, setFirstNum] = useState('');
  const [secondNum, setSecondNum] = useState('');
  const [action, setAction] = useState(null);

  const handleClick = (val) => {
    if (val.match(/\d/) || val === '.') {
      // number button press
      if (!action) {
        const str = firstNum.concat(val);
        setFirstNum(str);
        setView(str);
      } else {
        const str = secondNum.concat(val);
        setSecondNum(str);
        setView(str);
      }
    } else {
      // action button press
      if (val === 'AC' || val === 'C') {
        setFirstNum('');
        setSecondNum('');
        setAction(null);
        setView('');
      } else if ('+-÷x'.includes(val)) {
        if (!action) {
          setAction(val);
        } else {
          const total = calculate(firstNum, secondNum, action);
          setView(total);
          setFirstNum(total);
          setSecondNum('');
          setAction(val);
        }
      } else if (val === '+/-') {
        if (!action && firstNum[0] !== '-' && firstNum) {
          const str = '-'.concat(firstNum);
          setFirstNum(str);
          setView(str);
        } else if (!action) {
          const arr = firstNum.slice(1);
          setFirstNum(arr);
          setView(arr);
        } else if (action && secondNum[0] !== '-') {
          const str = '-'.concat(secondNum);
          setSecondNum(str);
          setView(str);
        } else {
          const arr = secondNum.slice(1);
          setSecondNum(arr);
          setView(arr);
        }
      } else if (val === '%') {
        if (!action) {
          const holder = firstNum / 100;
          setFirstNum(holder);
          setView(holder);
        } else {
          setSecondNum('');
          setView(firstNum);
        }
      } else if (val === '=') {
        const total = calculate(firstNum, secondNum, action);
        setView(total);
        setFirstNum(total);
        setSecondNum('');
        setAction(null);
      }
    }
  };

  return (
    <>
      <div className=".App">
        <View display={view} />
        <ButtonList onClick={(name) => handleClick(name)} />
      </div>
    </>
  );
}

export default App;
