import React, { useState } from "react";
import "./dynamicStyling.css";

const DynamicStyling = () => {
  const [btnState, setBtnState] = useState(false);

  const btnStyle = btnState ? "active" : "inactive";

  const click = () => {
    setBtnState(!btnState);
    console.log("Button clicked, state:", !btnState);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Dynamic Styling</h1>
      <button className={btnStyle} onClick={click}>
        Click Here!
      </button>
      <p>Current state: {btnState ? "Active" : "Inactive"}</p>
    </div>
  );
};

export default DynamicStyling;
