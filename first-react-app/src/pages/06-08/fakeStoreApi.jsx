import React, { useEffect, useState } from "react";
import axios from "axios";
import "./fakeStoreApi.css";

const FakeStoreApi = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => {
        alert("Failed to fetch products: " + error);
      });
  }, []);

  return (
    <>
      <h1>Welcome to the Fake Store</h1>
      <div className="product-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-details">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">£{product.price}</p>
              <div className="product-buttons">
                <button>Add to Cart</button>
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FakeStoreApi;
