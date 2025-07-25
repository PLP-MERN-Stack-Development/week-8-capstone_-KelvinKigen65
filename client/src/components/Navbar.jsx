import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo.png"; // ✅ adjust path if needed

const Navbar = ({ userRole }) => {
  const location = useLocation();
  const isDashboard =
    location.pathname.startsWith("/dashboard/freelancer") ||
    location.pathname.startsWith("/dashboard/client");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur-md shadow-sm px-8 py-4 flex justify-between items-center">
      {/* 🔰 Logo + Brand Name */}
      <a href="/" className="flex items-center gap-2">
        <img src={logo} alt="FreelancersKE Logo" className="w-8 h-8" />
        <span className="text-xl font-bold text-gray-600">FreelancersKE</span>
      </a>

      <ul className="flex gap-6 text-gray-800 font-medium">
        <li>
          <a href="/" className="hover:text-green-600 transition">Home</a>
        </li>

        {/* 🔐 Show links only inside dashboard pages */}
        {isDashboard && userRole === "freelancer" && (
          <>
            <li>
              <a href="/projects" className="hover:text-green-600 transition">Browse Projects</a>
            </li>
            <li>
              <a href="/my-projects" className="hover:text-green-600 transition">My Projects</a>
            </li>
            <li>
              <a href="/login" className="hover:text-green-600 transition">Logout</a>
            </li>
          </>
        )}

        {isDashboard && userRole === "client" && (
          <>
            <li>
              <a href="/post-project" className="hover:text-green-600 transition">Post Project</a>
            </li>
            <li>
              <a href="/my-projects" className="hover:text-green-600 transition">My Projects</a>
            </li>
            <li>
              <a href="/login" className="hover:text-green-600 transition">Logout</a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
