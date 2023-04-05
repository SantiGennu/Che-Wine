import { useState } from "react";

export const UseCount = (initial = 0, stock = 5, min = 1) => {
  if (initial < min || initial > stock) initial = min;

  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > min) setCount(count - 1);
  };
  const reset = () => {
    setCount(initial);
  };

  return { count, increment, decrement, reset };
};
