const operator = {
  x: (x, y) => x * y,
  '÷': (x, y) => x / y,
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
};

const calculate = (str1, str2, action) => {
  const first = parseFloat(str1);
  const second = parseFloat(str2);
  const total = operator[action](first, second).toString();
  return total;
};

export { operator, calculate };
