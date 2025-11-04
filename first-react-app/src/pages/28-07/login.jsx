import React, { useEffect } from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../../redux/slices/authSlice";
import api from "../../services/axiosConfig";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const router = useNavigate();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const InputHandler = (event) => {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: "" });
  };

  const Submit = async (event) => {
    event.preventDefault();

    // Form validation
    let newErrors = {};
    if (!userDetails.email) newErrors.email = "Please enter your email";
    if (!userDetails.password) newErrors.password = "Please enter your password";

    setErrors(newErrors);

    // If validation passes, proceed with API call
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await api.post("/auth/login", userDetails);

        if (response.status === 200) {
          // Store user data in Redux
          dispatch(loginSuccess(response.data.user));

          toast.success(
            `Hi ${response.data.user.name || userDetails.email}, \nYou are logged in successfully`
          );
          setUserDetails({ email: "", password: "" });
        } else {
          setErrors(response.data.errors);
        }
      } catch (error) {
        toast.error(error.response?.data?.message || "Login failed");
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

  useEffect(() => {
    if (user?.userId) {
      router("/");
    }
  }, [user]);

  return (
    <div>
      <h1>This is the Login Page</h1>

      <form onSubmit={Submit}>
        <input
          name="email"
          id="email"
          type="email"
          value={userDetails.email}
          placeholder="Enter your email"
          onChange={InputHandler}
        />
        {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
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

      {isAuthenticated && user && (
        <div className="welcome-message">
          <h2>Welcome, {user.name || "User"}!</h2>
          <p>You are successfully logged in.</p>
        </div>
      )}

      <Toaster />
    </div>
  );
}

export default Login;
