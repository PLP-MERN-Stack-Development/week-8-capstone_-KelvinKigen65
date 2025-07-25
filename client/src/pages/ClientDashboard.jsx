import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CreateProject from "../components/CreateProject"; // ✅ Make sure this exists

const ClientDashboard = () => {
  const [profile, setProfile] = useState({});
  const [myProjects, setMyProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        // 🧑‍💼 Fetch profile
        const profileRes = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/users/me`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setProfile(profileRes.data);

        // 📁 Fetch client projects
        const projectsRes = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/projects/my-projects`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setMyProjects(projectsRes.data);
      } catch (err) {
        console.error("❌ Error loading dashboard:", err.message);
      }
    };

    fetchData();
  }, []);

  // 🔄 Append new project instantly
  const handleProjectPosted = (newProject) => {
    setMyProjects((prev) => [newProject, ...prev]);
  };

  return (
    <div className="p-8 pt-28 min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome, {profile.name || "Client"} 🧑‍💼</h1>
      <p className="text-gray-600 mb-6">
        Post new projects, manage freelancers, and review proposals.
      </p>

      {/* 🧑‍💼 Profile Preview */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Your Profile</h2>
        <p className="text-gray-600">Email: {profile.email}</p>
        <p className="text-gray-600">
          Projects Posted: {myProjects.length}
        </p>
      </div>

      {/* 🆕 Create Project */}
      <div className="mb-8">
        <CreateProject onProjectPosted={handleProjectPosted} />
      </div>

      {/* 🗂 Recent Projects Preview */}
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Latest Projects You Posted
        </h2>
        {myProjects.length > 0 ? (
          <ul className="space-y-3">
            {myProjects.slice(0, 3).map((project) => (
              <li
                key={project._id}
                className="p-4 bg-white rounded shadow border border-gray-100"
              >
                <h3 className="font-bold text-blue-600">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <span className="text-sm text-gray-400">
                   Budget: {project.budget}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">You haven’t posted any projects yet.</p>
        )}
      </div>
    </div>
  );
};

export default ClientDashboard;
