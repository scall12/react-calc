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
  const nameList = 'AC,+/-,%,/,7,8,9,*,4,5,6,-,1,2,3,+,0,.,=';

  const renderButton = (name) => {
    return <Button onClick={() => props.onClick(name)} name={name} />;
  };

  const listItems = nameList.split(',').map((name) => {
    return renderButton(name);
  });

  return <div id="button-list">{listItems}</div>;
}

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
        setView([]);
      } else if ('+-/*'.includes(val)) {
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
