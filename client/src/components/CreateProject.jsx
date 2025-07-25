import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext"; // ✅ Grab user from context

const CreateProject = () => {
  const { user } = useAuth(); // ✅ Access logged-in user
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !budget) {
      setError("All fields are required.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const payload = { title, description, budget, clientId: user._id };

      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/projects`, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("✅ Project Created!");
      setTitle("");
      setDescription("");
      setBudget("");
      setError("");
    } catch (err) {
      console.error("❌ Error:", err.response?.data?.message);
      setError(err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Post a New Project</h2>

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Project Title"
        className="w-full mb-4 px-3 py-2 border rounded"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Project Description"
        className="w-full mb-4 px-3 py-2 border rounded"
        rows={4}
      />

      <input
        type="number"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        placeholder="Budget (e.g. $300)"
        className="w-full mb-4 px-3 py-2 border rounded"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Create Project
      </button>
    </form>
  );
};

export default CreateProject;
