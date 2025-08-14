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
import PageNotFound from "./pages/06-08/pageNotFound";
import FakeStoreApi from "./pages/06-08/fakeStoreApi";
import SingleProductApi from "./pages/08-08/singleProductApi";
import Cart from "./pages/08-08/cart";
import UseMemo from "./pages/10-08/useMemo";
import UseRef from "./pages/13-08/useRef";
import UseCallback from "./pages/13-08/useCallback";
import UseReducer from "./pages/13-08/useReducer";

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
        <Route
          path="/conditionalRendering"
          element={<ConditionalRendering />}
        />
        <Route path="/styled-component" element={<StyledComponent />} />
        <Route path="/greeting" element={<Greeting name="Ashutosh" />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/dynamic-styling" element={<DynamicStyling />} />
        <Route path="/fake-store-api" element={<FakeStoreApi />} />
        <Route
          path="/fake-store-api/:productId"
          element={<SingleProductApi />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/useMemo" element={<UseMemo />} />
        <Route path="/useRef" element={<UseRef />} />
        <Route path="/useCallback" element={<UseCallback />} />
        <Route path="/useReducer" element={<UseReducer />} />



        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
