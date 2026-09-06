import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function EditComponent() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [error, setError] = useState("");

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) {
        setError("Product ID is missing");
        setFetchLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${API_URL}/api/products/${id}`);
        const product = response.data.product || response.data;

        setFormData({
          title: product.title || "",
          description: product.description || "",
          image: null,
        });
      } catch (err) {
        console.error("Failed to fetch product:", err);
        setError("Failed to fetch product");
      } finally {
        setFetchLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: name === "image" ? files?.[0] || null : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id) {
      setError("Product ID is missing");
      return;
    }

    setLoading(true);
    setError("");

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);

    if (formData.image) {
      data.append("image", formData.image);
    }

    // Laravel supports PUT through a POST request with this field.
    data.append("_method", "PUT");

    try {
      await axios.post(`${API_URL}/api/products/${id}`, data);
      alert("Product updated successfully");
      window.location.href = "/list";
    } catch (err) {
      console.error("Failed to update product:", err);
      setError("Failed to update product");
      alert("Failed to update product");
    } finally {
      setLoading(false);
    }
  };

  if (fetchLoading) return <div>Loading...</div>;
  if (error && !formData.title && !formData.description) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Edit Product</h2>

      {error && <p>{error}</p>}

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
          <label htmlFor="image">Image (optional):</label>
          <input
            id="image"
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{ padding: "10px 20px" }}
        >
          {loading ? "Updating..." : "Update Product"}
        </button>
      </form>
    </div>
  );
}

export default EditComponent;
