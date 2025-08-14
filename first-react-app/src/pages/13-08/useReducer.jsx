import React, { useReducer } from 'react'

const UseReducer = () => {
      // Step 2: Initialize with reducer and initial state

      const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div style={{ padding: 20 }}>
      <h2>Count: {state.count}</h2>
      {/* Step 3: Dispatch actions */}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

// Step 1: Define the reducer function
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

export default UseReducer