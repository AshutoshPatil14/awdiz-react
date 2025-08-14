import React, { useState ,useRef } from 'react'


const UseRef = () => {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0); // Doesn't cause re-render when updated

  renderCount.current += 1;

  return (
    <div style={{ padding: 20 }}>
      <p>Count: {count}</p>
      <p>Component rendered {renderCount.current} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default UseRef