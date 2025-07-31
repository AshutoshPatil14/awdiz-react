import React, { useEffect, useState } from "react";

function UseEffect() {
  let [count, setCount] = useState(0);

  function increment1() {
    if (count < 10) {
      setCount(count + 1);
    }
  }
  function decrement1() {
    if (count > 1) {
      setCount(count - 1);
    }
  }
  // function reset() {
  //   setCount(5);
  // }
  let [count2, setCount2] = useState(0);

  function increment2() {
    if (count2 < 10) {
      setCount2(count2 + 1);
    }
  }
  function decrement2() {
    if (count2 > 1) {
      setCount2(count2 - 1);
    }
  }
  function reset() {
    setCount(5);
    setCount2(5);
  }

  useEffect(() => {
    console.log("Hello");
  });
  useEffect(() => {
    console.log("Hello");
  }, []);
  useEffect(() => {
    console.log("Hello");
  }, [count]);
  useEffect(() => {
    console.log("Hello");
  }, [count, count2]);

  return (
    <div>
      <h1>This is the example of useEffect</h1>

      <h4>This is the count ↓</h4>
      <div class="btn">
        <div>
          <button onClick={increment1}>⬆</button>
          <h4>{count}</h4>
          <button onClick={decrement1}>⬇</button>
        </div>
        <button onClick={reset}>↺</button>
        <div>
          <button onClick={increment2}>⬆</button>
          <h4>{count2}</h4>
          <button onClick={decrement2}>⬇</button>
        </div>
      </div>
      <h5>Open console to see the output</h5>
    </div>
  );
}
export default UseEffect;
