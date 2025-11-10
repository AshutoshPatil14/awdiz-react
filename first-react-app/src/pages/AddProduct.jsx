import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import api from "../services/axiosConfig.js";

function AddProduct() {
  const user = useSelector((state) => state.auth.user);
  console.log(user)
  const userId = user?.userId;
  // const seller = userId;

  const [product, setProduct] = useState({
    name: "Macbook air M4",
    price: "89999",
    category: "Electronics",
    stock: "100",
    imgUrl:
      "data:image/jpeg;base64,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",
    sellerId: userId , 
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

    console.log(product)
    
    try {
      const response = await api.post("/seller/add-product", product);
      console.log("Product Added:", response.data);
      alert('Product added successfully!');
      setProduct({
        name: '',
        price: '',
        category: '',
        stock: '',
        imgUrl: '',
        sellerId: userId,
      });
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Error adding product. Please try again.");
    }
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

        <button type="submit" className="submit-button">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
