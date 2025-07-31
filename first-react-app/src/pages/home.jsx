import React, { useState } from "react";
import UseEffect from "./useEffect";
import UseState from "./useState";

function Home() {
  const [show, setShow] = useState(null);

  return (
    <div>
      <h1>This is the Homepage</h1>
      <p>Welcome to the web application</p>
      <button onClick={() => setShow("effect")}>useEffect</button>
      <button onClick={() => setShow("state")}>useState</button>
      <button onClick={() => setShow("clear")}>Clear</button>
      {show === "effect" && <UseEffect />}
      {show === "state" && <UseState />}
      {show === "clear" && <null/>}
    </div>
  );
}

export default Home;
