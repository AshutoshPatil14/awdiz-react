import React, { useEffect, useState } from "react";

function UseState() {
  let [count, setCount] = useState(0);

  function increment() {
    if (count < 10) {
      setCount(count + 1);
    }
  }
  function decrement() {
    if (count > 1) {
      setCount(count - 1);
    }
  }
  function reset() {
    setCount(5);
  }

  return (
    <div>
      <h1>This is the example of useState</h1>

      <h4>This is the count ↓</h4>
      <div class="btn">
        <button onClick={decrement}>◀</button>
        <h4>{count}</h4>
        <button onClick={increment}>▶</button>
      </div>
      <button onClick={reset}>↺</button>
    </div>
  );
}
export default UseState;
