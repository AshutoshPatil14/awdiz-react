import React from "react";
import { useState } from "react";

function Login() {
  const [userDetails, setUserDetails] = useState({ name: "", password: "" });

  const [errors, setErrors] = useState({});

  const InputHandler = (event) => {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: "" });
  };

  const Submit = (event) => {
    event.preventDefault();

    let newErrors = {};
    if (!userDetails.name) newErrors.name = "Please enter your email";
    if (!userDetails.password)
      newErrors.password = "Please enter your password";

    setErrors(newErrors);

    if (userDetails.name && userDetails.password) {
      alert(`Hi ${userDetails.name}, \nYou are logged in successfully`);
      setUserDetails({ name: "", password: "" });
    }
  };

  const [showPassword, setShowPassword] = useState("password");

  const ShowPassword = () => {
    setShowPassword("text");
    setTimeout(() => {
      setShowPassword("password");
    }, 1500);
  };

  return (
    <div>
      <h1>This is the Login Page</h1>
      <form onSubmit={Submit}>
        <input
          name="name"
          id="name"
          type="text"
          value={userDetails.name}
          placeholder="Enter your name"
          onChange={InputHandler}
        />
        {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
        <div style={{ display: "flex" }}>
          <input
            name="password"
            id="password"
            value={userDetails.password}
            type={showPassword}
            placeholder="Enter your password"
            onChange={InputHandler}
          />
          <button type="button" onClick={ShowPassword}>
            Show
          </button>
        </div>
        {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
