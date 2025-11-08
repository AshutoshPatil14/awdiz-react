import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import api from "../services/axiosConfig";

function AddProduct() {
  const user = useSelector((state) => state.auth.user);
  const userId = user?._id;

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    imgUrl: "",
    ...(userId && { userId }), // Conditionally add userId if it exists
  });

  useEffect(() => {
    if (userId) {
      setProduct((prevProduct) => ({
        ...prevProduct,
        userId: userId,
      }));
    }
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Product Added:", product);
    // Here you would typically send the product data to a backend API

    try {
      const response = await api.post("/seller/add-product", product);
      console.log("Product Added:", response.data);
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Error adding product. Please try again.");
    }
    // For now, we'll just log it to the console.
    alert("Product added successfully! Check console for details.");
    setProduct({
      name: "",
      price: "",
      category: "",
      stock: "",
      imgUrl: "",
      ...(userId && { userId }),
    });
  };

  return (
    <div className="add-product-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit} className="add-product-form">
        <div className="form-group">
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="stock">Stock:</label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="imgUrl">Image URL:</label>
          <input
            type="text"
            id="imgUrl"
            name="imgUrl"
            value={product.imgUrl}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
