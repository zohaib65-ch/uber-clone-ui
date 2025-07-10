import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
function CaptainLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const captainData = {
      email: email,
      password: password,
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainData);
    if (response.status === 200) {
      const data = response.data;
      setCaptain(data.user);
      try {
        localStorage.setItem("token", response.data.token);
      } catch (error) {
        console.error("Failed to store token in localStorage:", error);
      }
    }
    if (email && password) {
      toast.success("Login successful!", { position: "top-center" });
      setEmail("");
      setPassword("");
      navigate("/captain-home");
    } else {
      toast.error("Please fill all fields!", { position: "top-center" });
    }
  };
  return (
    <form onSubmit={handleSubmit} className=" p-1 md:p-8 flex items-center justify-center bg-gray-50 min-h-screen">
      <div className="w-full max-w-md md:max-w-lg bg-white rounded-xl p-4 md:p-8 flex flex-col justify-between min-h-[100vh] relative">
        <img className="w-20 mb-6" src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />

        <div className="flex-1">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">What's our Captain email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="hello@sarthak.com"
              className="w-full py-3 pl-4 pr-4 border border-gray-300 rounded-xl text-gray-900 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Enter Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full py-3 pl-4 pr-4 border border-gray-300 rounded-xl text-gray-900 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
          </div>

          <button type="submit" className="w-full block text-center bg-black text-white py-3 rounded-lg font-semibold text-base hover:bg-gray-900 transition-colors mb-4">
            Login
          </button>

          <p className="text-sm text-center mb-4">
            Be a captain.{" "}
            <Link to="/captain-signup" className="text-blue-600">
              Join now
            </Link>
          </p>
        </div>

        <Link to="/user-login" className="w-full block text-center bg-[#f4c264] text-white py-3 rounded-lg font-semibold text-base hover:bg-green-700 transition-colors mt-4">
          Sign in as User
        </Link>
      </div>

      <Toaster richColors />
    </form>
  );
}

export default CaptainLogin;
