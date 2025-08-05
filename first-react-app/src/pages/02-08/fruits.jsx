import React, { useState } from "react";

const Fruits = () => {
  const [fruit, setFruit] = useState(["apple", "banana", "cherry"]);

  const [newFruit, setNewFruit] = useState("");

  const onInputChange = (element) => {
    setNewFruit(element.target.value);
  };

  const addFruit = () => {
    if (newFruit.length > 0) {
      setFruit([...fruit, newFruit]);
      setNewFruit("");
    } else {
      alert("Please enter the name of fruit");
    }
  };

  const deleteFruit = (indexToDelete) => {
    setFruit(fruit.filter((element, index) => index !== indexToDelete));
  };

  return (
    <>
      <h2>Fruits</h2>
      <fieldset>
        {fruit.map((fruit, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <h4>
              {index + 1} {fruit}
            </h4>
            <button style={{ margin: "10px" }} onClick={() => deleteFruit(index)}>
              Delete
            </button>
          </div>
        ))}
      </fieldset>
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <label htmlFor="txt-bx">Add new fruit:</label>
        <input value={newFruit} onChange={onInputChange} type="text" />
      </div>
      <br />
      <button onClick={addFruit}>Add</button>
    </>
  );
};

export default Fruits;
