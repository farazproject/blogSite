import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../../../src/redux/slices/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}> + </button> <br />
      <button onClick={() => dispatch(decrement())}> - </button> <br />
      <button onClick={() => dispatch(reset())}> Reset </button>
    </div>
  );
}

export default Counter