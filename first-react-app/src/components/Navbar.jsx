import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/authSlice";
import api from "../services/axiosConfig";

function Navbar() {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      dispatch(logout());
      const response = await api.post("/auth/logout");
      if (response.status === 200) {
        nav("/login");
      }
    } catch (error) {
      console.log(error);
    }
    // Optionally navigate to a login route if desired
    // nav("/login");
  };
  return (
    <>
      <button
        onClick={() => {
          nav("/");
        }}
      >
        🏠 Home
      </button>
      <button
        onClick={() => {
          nav("/login");
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          nav("/register");
        }}
      >
        Register
      </button>
      <button
        onClick={() => {
          nav("/cart");
        }}
      >
        Cart 🛒
      </button>
      <button
        onClick={() => {
          handleLogout();
        }}
      >
        Logout
      </button>
    </>
  );
}

export default Navbar;
