import React, { useState } from "react";

const ConditionalRendering = () => {
const[condition, setCondiiton] = useState(null)
  return (
    <>
      {condition ? (
        <h3>the condition is <span style={{color:"green"}}>true</span></h3>
      ) : (
        <h3>the condition is <span style={{color:"red"}}>false</span></h3>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <input
            type="radio"
            id="radio-true"
            name="radio-btn"
            onClick={() => {
              setCondiiton(true);
            }}
          />
          <label htmlFor="radio-true">True</label>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <input
            type="radio"
            f
            id="radio-false"
            name="radio-btn"
            onClick={() => {
              setCondiiton(false);
            }}
          />
          <label htmlFor="radio-false">False</label>
        </div>
      </div>
    </>
  );
};

export default ConditionalRendering;
