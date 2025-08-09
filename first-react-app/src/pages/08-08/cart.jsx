import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const nav = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setProducts(cartData);
  }, []);

  // Remove item handler
  const handleRemove = (id, e) => {
    e.stopPropagation(); // Prevent card click navigation
    const updatedCart = products.filter((product) => product.id !== id);
    setProducts(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="cart-product-container">
      <h1>Your Cart</h1>
      {products.length > 0 ? (
        products.map((product) => (
          <div
            className="cart-product-card"
            key={product.id}
            onClick={() => nav(`/fake-store-api/${product.id}`)}
          >
            <div className="cart-product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="cart-product-details">
              <h3 className="cart-product-title">{product.title}</h3>
              <p className="cart-product-price">£{product.price}</p>
            </div>
            <div className="cart-product-buttons">
              <button onClick={(e) => handleRemove(product.id, e)}>
                Remove from Cart
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Oops, Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
