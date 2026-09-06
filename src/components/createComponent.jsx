import React, { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function CreateComponent() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: name === "image" ? files?.[0] || null : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);

    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      await axios.post(`${API_URL}/api/products`, data);

      alert("Product added successfully");
      setFormData({ title: "", description: "", image: null });
      e.target.reset();
      window.location.href = "/list";
    } catch (error) {
      console.error("Product creation failed:", error);
      alert("Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Create Product</h2>

      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        style={{ maxWidth: "400px", margin: "0 auto" }}
      >
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", height: "100px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="image">Image:</label>
          <input
            id="image"
            type="file"
            name="image"
            onChange={handleChange}
            required
            accept="image/*"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{ padding: "10px 20px" }}
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}

export default CreateComponent;
