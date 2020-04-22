import React, { useState } from 'react';
import './App.css';
import { operator, numify } from './helpers';

import View from './View';
import ButtonList from './ButtonList';

function App() {
  const [view, setView] = useState([]);
  const [firstNum, setFirstNum] = useState([]);
  const [secondNum, setSecondNum] = useState([]);
  const [action, setAction] = useState(null);

  const handleClick = (val) => {
    if (val.match(/\d/) || val === '.') {
      // number button press
      if (!action) {
        const arr = [...firstNum, val];
        setFirstNum(arr);
        setView(arr);
      } else {
        const arr = [...secondNum, val];
        setSecondNum(arr);
        setView(arr);
      }
    } else {
      // action button press
      if (val === 'AC' || val === 'C') {
        setFirstNum([]);
        setSecondNum([]);
        setAction(null);
        setView([]);
      } else if ('+-/*'.includes(val)) {
        setAction(val);
      } else if (val === '+/-') {
        if (!action && firstNum[0] !== '-') {
          const arr = ['-', ...firstNum];
          setFirstNum(arr);
          setView(arr);
        } else if (!action) {
          const arr = firstNum.slice(1);
          setFirstNum(arr);
          setView(arr);
        } else if (action && secondNum[0] !== '-') {
          const arr = ['-', ...secondNum];
          setSecondNum(arr);
          setView(arr);
        } else {
          const arr = secondNum.slice(1);
          setSecondNum(arr);
          setView(arr);
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
    }
  };

  return (
    <>
      <div className=".App">
        <View display={firstNum} />
        <View display={secondNum} />
        <View display={view} />
        <ButtonList onClick={(name) => handleClick(name)} />
      </div>
    </>
  );
}

export default App;
