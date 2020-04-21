const operator = {
  '*': (x, y) => x * y,
  '/': (x, y) => x / y,
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
};

const numify = (array) => {
  return parseFloat(array.join(''));
};

const findDecimal = (array) => {
  const index = array.indexOf('.');
  if (index) {
    array.splice(index, 1);
  }
};

export { operator, numify };
