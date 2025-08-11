import React, { useState, useMemo } from "react";

export default function App() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([
    "Ted",
    "Marshall",
    "Lily",
    "Robin",
    "Barney",
    "Lisa",
  ]);


  const [getUser, setGetUser] = useState("")


  const addUser = () => {
    alert(`Adding ${getUser}`);
    setUsers([...users, getUser]);
    setGetUser("")
  };

  // useMemo will only recalculate when `search` changes
  const filteredUsers = useMemo(() => {
    console.log("Filtering...");
    return users.filter((user) =>
      user.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, users]);

  return (
    <>
      <h1>useMemo Example</h1>
      <div>Here, the user list only changes when search box input changes</div>
      <div style={{ padding: 20 }}>
        <label htmlFor="">Search: </label>
        <input
          type="text"
          placeholder="Find user..."
          value={search}
          onChange={(element) => setSearch(element.target.value)}
        />
        <ul>
          {filteredUsers.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      </div>
      <div>
        <input value={getUser}
          onChange={(element) => setGetUser(element.target.value)}
          type="text"
        />
        <button onClick={addUser}>Add User</button>
      </div>
    </>
  );
}


