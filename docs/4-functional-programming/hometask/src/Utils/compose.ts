export const compose = (...funcs) => {
  return (arr) => {
    return funcs.reverse().reduce((acc, func) => func(acc), arr);
  };
};
