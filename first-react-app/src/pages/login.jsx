import React from "react";

function Login() {
  return (
    <div>
      This is the Login Page
      <form>
        <input type="text" placeholder="Enter your name" />
        <input type="password" placeholder="Enter your password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
