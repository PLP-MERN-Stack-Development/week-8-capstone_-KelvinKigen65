import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const FreelancerDashboard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/projects`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setProjects(res.data))
      .catch((err) =>
        console.error("❌ Error fetching available projects:", err.message)
      );
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Welcome, Freelancer 👋
      </h1>
      <p className="text-gray-600 mb-6">
        Start finding work, updating your profile, or checking applications
        here.
      </p>

      {/* 🔗 Quick Links */}
      <div className="flex gap-4 mb-6">
        <Link
          to="/projects"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          🔍 Browse Projects
        </Link>
        <Link
          to="/my-applications"
          className="bg-gray-100 text-gray-800 px-4 py-2 rounded hover:bg-gray-200"
        >
          📄 View My Applications
        </Link>
      </div>

      {/* 🗂 Project Feed Preview */}
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
           Latest Opportunities
        </h2>
        {projects.length > 0 ? (
          <ul className="space-y-4">
            {projects.slice(0, 3).map((project) => (
              <li
                key={project._id}
                className="p-4 bg-white rounded shadow border border-gray-100"
              >
                <h3 className="font-bold text-green-700">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <span className="text-sm text-gray-400">
                   Budget: {project.budget}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">
            No projects found. Time to refresh or try again later!
          </p>
        )}
      </div>
    </div>
  );
};

export default FreelancerDashboard;
