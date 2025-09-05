import { useState } from "react";
import { useAuth } from "../context/authContext.jsx";
import { useNavigate } from "react-router-dom";


export default function Register() {
const navigate = useNavigate();
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
      navigate("/")
      
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Image / branding */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-purple-500 to-pink-500 items-center justify-center">
        <h1 className="text-white text-5xl font-bold">POPZI</h1>
      </div>

      {/* Right side - Form */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Sign up to POPZI
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Join the community, share posts, and connect with friends.
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg space-y-4"
          >
            <input
              type="text"
              placeholder="Username"
              className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-full py-3 rounded font-semibold hover:opacity-90 transition">
              Sign Up
            </button>
          </form>

          <p className="text-center text-gray-500 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-purple-500 font-semibold">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
