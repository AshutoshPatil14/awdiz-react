import React from "react";

function Register() {
  return (
    <div>
      This is the Register Page
      <form>
        <input type="text" placeholder="Enter your name" />
        <input type="password" placeholder="Create a password" />
        <input type="password" placeholder="Confirm your password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
