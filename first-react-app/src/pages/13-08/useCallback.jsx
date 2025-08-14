import React, { useCallback, useState } from 'react'

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // This function will be memoized and only recreated when `count` changes
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Count: {count}</h2>
      <Button onClick={increment}>Increment</Button>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

function Button({ onClick, children }) {
  console.log(`Rendering button: ${children}`);
  return <button onClick={onClick}>{children}</button>;
}


export default UseCallback