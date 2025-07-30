import React, { useEffect, useState } from "react";
import UseEffect from "./useEffect";
import UseState from "./useState";

function Home() {
  return (
    <div>
      <h1>This is the Homepage</h1>
      <p>Welcome to the web application</p>

      <p>Navigate to Login or Register to continue</p>
      <button onClick={UseEffect}>useEffect</button>
      <button onClick={UseState}>useState</button>
    </div>
  );
}

export default Home;
