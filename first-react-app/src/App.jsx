// import { useState } from 'react'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/28-07/home";
import Login from "./pages/28-07/login";
import Register from "./pages/28-07/register";
import UseState from "./pages/30-07/useState";
import Navbar from "./components/Navbar";
import UseEffect from "./pages/30-07/useEffect";
import UseParams from "./pages/01-08/useParams";
import Products from "./pages/01-08/products";
import ConditionalRendering from "./pages/02-08/conditionalRendering";
import StyledComponent from "./pages/02-08/styledComponent";
import Greeting from "./pages/02-08/greeting";
import Fruits from "./pages/02-08/fruits";
import DynamicStyling from "./pages/03-08/dynamicStyling";

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
        <Route path="/conditionalRendering" element={<ConditionalRendering />} />
        <Route path="/styled-component" element={<StyledComponent/>}/>
        <Route path="/greeting" element={<Greeting name='Ashutosh'/>}/>
        <Route path="/fruits" element={<Fruits/>}/>
        <Route path="/dynamic-styling" element={<DynamicStyling/>}/>

      </Routes>
    </>
  );
}

export default App;
