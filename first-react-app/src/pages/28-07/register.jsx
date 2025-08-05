import React from "react";

function Register() {
  return (
    <div>
      <h1>This is the Register Page</h1>
      <form>
        <input type="text" placeholder="Enter your name" />
        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Create a password" />
        <input type="password" placeholder="Confirm your password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
