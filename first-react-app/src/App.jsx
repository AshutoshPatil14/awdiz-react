// import { useState } from 'react'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import UseState from "./pages/useState";
import Navbar from "./components/Navbar";
import UseEffect from "./pages/useEffect";
import UseParams from "./pages/useParams";
import Products from "./pages/products";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/useState" element={<UseState />} />
        <Route path="/useEffect" element={<UseEffect />} />
        <Route path="/useParams" element={<Products />} />
        <Route path="/useParams/:productID" element={<UseParams />} />
      </Routes>
    </>
  );
}

export default App;
