import React from "react";
import { Link } from "react-router-dom";
import FreelancerCard from "../components/FreelancerCard";

const freelancers = [
  {
    name: "Amina Mwangi",
    title: "UI/UX Designer",
    rate: 30,
    image: "https://via.placeholder.com/400x300?text=Amina",
  },
  {
    name: "Daniel Otieno",
    title: "Full-Stack Developer",
    rate: 45,
    image: "https://via.placeholder.com/400x300?text=Daniel",
  },
  {
    name: "Faith Kimani",
    title: "Content Writer",
    rate: 25,
    image: "https://via.placeholder.com/400x300?text=Faith",
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 pt-24 px-6 pb-10">
      {/* 🎯 Hero Section */}
      <div className="flex flex-col items-center text-center mb-20">
        <img
          src="undraw_programming_65t2.svg"
          alt="Freelancer Illustration"
          className="w-64 mb-6 animate-fadeIn"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">
          FreelancersKE — Your Gateway to Talent
        </h1>
        <p className="text-gray-700 text-lg mb-6 max-w-xl">
          Hire top professionals or showcase your freelance skills. The future of work starts here.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/signup"
            className="px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition duration-300"
          >
            Signup
          </Link>
          <Link
            to="/login"
            className="px-6 py-2 bg-white text-blue-600 border border-blue-600 rounded shadow hover:bg-blue-50 transition duration-300"
          >
            Login
          </Link>
        </div>
      </div>

      {/* 💼 Featured Freelancers */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Meet Top Freelancers in Kenya 🇰🇪
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {freelancers.map((freelancer, index) => (
            <FreelancerCard key={index} {...freelancer} />
          ))}
        </div>
      </section>

      {/* 🌐 Footer */}
      <footer className="mt-20 py-6 border-t border-gray-200 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} FreelancersKE — Built in Kenya.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-blue-600 transition">Privacy Policy</a>
          <a href="#" className="hover:text-blue-600 transition">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
