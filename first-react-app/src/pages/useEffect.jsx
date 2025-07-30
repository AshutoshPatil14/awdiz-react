import React, { useEffect, useState } from "react";

function UseEffect() {
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

  useEffect(() => {
    console.log("Hello");
  }, []);

  return (
    <div>
      <h1>This is the example of useEffect</h1>

      <h4>This is the count ↓</h4>
      <div>
        <button onClick={increment}>⬆</button>
        <h4>{count}</h4>
        <button onClick={decrement}>⬇</button>
      </div>

      <button onClick={reset}>↺</button>
    </div>
  );
}
export default UseEffect;
