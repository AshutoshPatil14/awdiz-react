import React, { useEffect, useState } from "react";
import axios from "axios";
import "./fakeStoreApi.css";
import { useNavigate } from "react-router-dom";

const FakeStoreApi = () => {
  const nav = useNavigate();

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };
    getProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Welcome to the Fake Store</h1>
      <div className="product-container">
        {products.map((product) => (
          <div
            className="product-card"
            key={product.id}
            onClick={() => nav(`/fake-store-api/${product.id}`)}
          >
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-details">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">£{product.price}</p>
              <div className="product-buttons">
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card navigation
                    const cart = JSON.parse(localStorage.getItem("cart")) || [];
                    cart.push(product);
                    localStorage.setItem("cart", JSON.stringify(cart));
                  }}
                >
                  Add to Cart
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card navigation
                    // Add Buy Now logic here if needed
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FakeStoreApi;
