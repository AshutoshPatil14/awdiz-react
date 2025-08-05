import React, { useEffect, useState } from "react";

function UseEffect() {
  let [count, setCount] = useState(5);

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
  let [count2, setCount2] = useState(5);

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

  let [type, setType] = useState("Empty Dependencies");
  useEffect(() => {
    if (type === "Empty Dependencies") {
      console.log("Empty Dependencies");
    }
  }, []);
  useEffect(() => {
    if (type === "No Dependency") {
      console.log("No Dependency");
    }
  });
  useEffect(() => {
    if (type === "Single Dependency") {
      console.log("Single Dependency");
    }
  }, [count]);
  useEffect(() => {
    if (type === "Multiple Dependencies") {
      console.log("Multiple Dependencies");
    }
  }, [count, count2]);

  return (
    <div>
      <h1>This is the example of useEffect</h1>

      <div className="sel-btn">
        <button onClick={() => setType("Empty Dependencies")}>Empty Dependencies</button>
        <button onClick={() => setType("No Dependency")}>No Dependency</button>
        <button onClick={() => setType("Single Dependency")}>Single Dependency</button>
        <button onClick={() => setType("Multiple Dependencies")}>Multiple Dependencies</button>
      </div>

      <h4>This is the count ↓</h4>
      <div className="btn">
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
