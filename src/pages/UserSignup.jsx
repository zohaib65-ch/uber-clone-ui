import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import axios from "axios";
import { UserDataContext } from "../context/userContext";

function UserSignup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, setUser } = React.useContext(UserDataContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }

    if (firstName && lastName && email && password) {
      toast.success("Signup successful!", { position: "top-center" });
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    } else {
      toast.error("Please fill all fields!", { position: "top-center" });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-start justify-center bg-white min-h-screen p-4">
        <div className="w-full max-w-sm">
          <img src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="Uber Logo" className="w-22 h-auto mb-6" />
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">What's our User name</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                className="w-1/2 py-3 pl-4 pr-4 border border-gray-300 rounded-xl text-gray-900 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all"
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
                className="w-1/2 py-3 pl-4 pr-4 border border-gray-300 rounded-xl text-gray-900 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">What's our User email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              className="w-full py-3 pl-4 pr-4 border border-gray-300 rounded-xl text-gray-900 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Enter Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className="w-full py-3 pl-4 pr-4 border border-gray-300 rounded-xl text-gray-900 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all"
            />
          </div>

          <button type="submit" className="w-full bg-black text-white py-3 rounded-lg text-lg font-bold mb-4 hover:bg-gray-900">
            Create Account
          </button>

          <p className="text-center font-semibold text-sm">
            Already have a account?{" "}
            <Link to="/user-login" className="text-blue-600">
              Login here
            </Link>
          </p>

          <div className="absolute bottom-4 left-4 right-4 max-w-sm mx-auto text-sm text-gray-500">
            <p className="text-[10px] leading-tight">
              This site is protected by reCAPTCHA and the <span className="underline">Google Privacy Policy</span> and <span className="underline">Terms of Service apply</span>.
            </p>
          </div>
        </div>

        <Toaster richColors />
      </form>
    </div>
  );
}

export default UserSignup;
