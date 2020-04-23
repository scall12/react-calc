const operator = {
  x: (x, y) => x * y,
  '÷': (x, y) => x / y,
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
};

const findDecimal = (array) => {
  const index = array.indexOf('.');
  if (index) {
    array.splice(index, 1);
  }
};

export { operator };
