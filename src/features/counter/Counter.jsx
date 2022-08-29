import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

export default function Counter() {

  const [incremental, setIncremental] = useState(0);

  const { count } = useSelector(({ counter }) => counter);
  const dispatch = useDispatch();

  const addVal = Number(incremental) || 0;

  const resetAll = () => {
    setIncremental(0);
    dispatch(reset());
  }

  return (
    <div>
      <div>
        <h2>
          {count}
        </h2>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>

      </div>
      <div>
        <input
          type="text"
          value={incremental}
          onChange={({ target }) => setIncremental(target.value)}
        />
        <button onClick={() => dispatch(incrementByAmount(addVal))}>Add By Amount</button>
      </div>

      <div>
        <button onClick={resetAll}>Reset</button>
      </div>
    </div>
  )
}
