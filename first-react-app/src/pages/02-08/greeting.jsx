import React, { useState } from "react";

const Greeting = ({name}) => {
  const [color, setColor] = useState(null);
  const changeColor = () => {
    if (color == null) {
      setColor("red");
    } else if (color == "red") {
      setColor("green");
    } else if (color == "green") {
      setColor("blue");
    } else {
      setColor(null);
    }
  };

  const style = {
    color: "cyan",
    backgroundColor: color,
  };

  return (
    <>
      <div style={style}>
        <h1>Hello {name}!</h1>
      </div>
      <button onClick={changeColor}>Change background color</button>
    </>
  );
};

export default Greeting;
