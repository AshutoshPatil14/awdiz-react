import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/authSlice";
import api from "../services/axiosConfig";

function Navbar() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  console.log(user);
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
      {!user && (
        <button
          onClick={() => {
            nav("/login");
          }}
        >
          Login
        </button>
      )}
      {!user && (
        <button
          onClick={() => {
            nav("/register");
          }}
        >
          Register
        </button>
      )}
      {user?.role === "user" && (
        <button
          onClick={() => {
            nav("/cart");
          }}
        >
          Cart 🛒
        </button>
      )}

      {user?.role === "seller" && (
        <button
          onClick={() => {
            nav("/seller/add-product");
          }}
        >
          Add Product
        </button>
      )}
      {user?.role === "seller" && (
        <button
          onClick={() => {
            nav("/view-products");
          }}
        >
          View Products
        </button>
      )}

      {user && (
        <button
          onClick={() => {
            handleLogout();
          }}
        >
          Logout
        </button>
      )}
    </>
  );
}

export default Navbar;
