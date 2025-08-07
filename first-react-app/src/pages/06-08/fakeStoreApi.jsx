import React, { useEffect, useState } from "react";
import axios from "axios";

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
      <div className="parent-card">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <div className="card-img">
              <img src={product.image} alt={product.title} />
            </div>
            <h3 className="card-title">{product.title}</h3>
            <h4 className="card-price">£{product.price}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default FakeStoreApi;
