import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProductApi = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error, "Error");
      }
    };
    getProduct();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product Not found. 🙁</div>;
  }

  return (
    <div>
      <div className="product-container" style={{ display: "flex" }}>
        <div className="single-product-page-img">
          <img src={product.image} />
        </div>
        <div className="single-product-page-details">
          <h3>{product.title}</h3>

          <h4>£ {product.price}</h4>
          <div>
            <button
              onClick={() => {
                // Get existing cart or initialize as empty array
                const cart = JSON.parse(localStorage.getItem("cart")) || [];
                // Add current product
                cart.push(product);
                // Save back to localStorage
                localStorage.setItem("cart", JSON.stringify(cart));
              }}
            >
              Add to cart
            </button>
          </div>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProductApi;
