// components/Counter.jsx
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { countState, evenSelector } from '../store/atoms/count'

const Counter = () => {
  const [count, setCount] = useRecoilState(countState);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  const isEven = useRecoilValue(evenSelector);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      {isEven && <p>It is EVEN</p>}
    </div>
  );
};

export default Counter;