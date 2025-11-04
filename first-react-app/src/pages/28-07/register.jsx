import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import api from "../../services/axiosConfig.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Register() {
  const router = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    confPassword: "",
  });

  const [errors, setErrors] = useState({});

  const InputHandler = (event) => {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: "" });
  };

  const Submit = async (event) => {
    event.preventDefault();

    let newErrors = {};
    if (!userDetails.name) newErrors.name = "Name is required";
    if (!userDetails.email) newErrors.email = "Email is required";
    if (!userDetails.password) newErrors.password = "Password is required";
    if (!userDetails.confPassword) newErrors.confPassword = "Confirmed Password is required";

    setErrors(newErrors);

    if (userDetails.name && userDetails.email && userDetails.password && userDetails.confPassword) {
      try {
        const response = await api.post("/auth/register", userDetails);
        if (response.status === 201) {
          toast.success(`Registeration success! \nWelcome aboard ${userDetails.name}! `);
          setUserDetails({ name: "", email: "", password: "", confPassword: "" });
        } else {
          setErrors(response.data.errors);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const [showPassword, setShowPassword] = useState("password");

  const ShowPassword = () => {
    setShowPassword("text");
    setTimeout(() => {
      setShowPassword("password");
    }, 1500);
  };

  const [showConfirmPassword, setShowConfirmPassword] = useState("password");

  const ShowConfirmPassword = () => {
    setShowConfirmPassword("text");
    setTimeout(() => {
      setShowConfirmPassword("password");
    }, 1500);
  };

  useEffect(() => {
    if (user.userId) {
      router("/");
    }
  }, [user]);

  return (
    <div>
      <h1>This is the Register Page</h1>
      <form onSubmit={Submit}>
        <input
          id="name"
          value={userDetails.name}
          name="name"
          type="text"
          placeholder="Enter your name"
          onChange={InputHandler}
        />
        {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
        <input
          id="email"
          value={userDetails.email}
          name="email"
          type="email"
          placeholder="Enter your email"
          onChange={InputHandler}
        />
        {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex" }}>
            <input
              id="password"
              value={userDetails.password}
              name="password"
              type={showPassword}
              placeholder="Create a password"
              onChange={InputHandler}
            />

            <button id="showPasswordBtn" type="button" onClick={ShowPassword}>
              Show
            </button>
          </div>
          {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex" }}>
            <input
              id="confPassword"
              value={userDetails.confPassword}
              name="confPassword"
              type={showConfirmPassword}
              placeholder="Confirm your password"
              onChange={InputHandler}
            />
            <button id="showConfirnPasswordBtn" type="button" onClick={ShowConfirmPassword}>
              Show
            </button>
          </div>
          {errors.confPassword && <div style={{ color: "red" }}>{errors.confPassword}</div>}
        </div>
        <button type="submit">Register</button>
      </form>
      <div>
        <h3>Name: {userDetails.name}</h3>
        <h3>Email: {userDetails.email}</h3>
        <h3>Password: {userDetails.password}</h3>
        <h3>Confirm Password: {userDetails.confPassword}</h3>
      </div>
    </div>
  );
}

export default Register;
