import { useState } from "react";
import { Link } from "react-router-dom";
import { Toaster, toast } from "sonner";

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState("");
  console.log(userData);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password,
    });
    if (email && password) {
      toast.success("Login successful!", { position: "top-center" });
      setEmail("");
      setPassword("");
    } else {
      toast.error("Please fill all fields!", { position: "top-center" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5 p-0 flex items-center justify-center bg-gray-50  min-h-screen">
      <div className="w-full max-w-md bg-white rounded-xl p-4 flex flex-col justify-between min-h-[95vh] relative">
        <img src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="Uber Logo" className="w-22 h-auto mb-6" />
        <div className="flex-1">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">What's your email</label>
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
          <Link to="/login" className="w-full block text-center bg-black text-white py-3 rounded-lg font-semibold text-base hover:bg-gray-900 transition-colors mb-4">
            Login
          </Link>
          <p className="text-sm text-blue-600 text-center mb-4">New here? Create new Account</p>
        </div>
        <Link to="/captain-login" className="w-full block text-center bg-green-600 text-white py-3 rounded-lg font-semibold text-base hover:bg-green-700 transition-colors mt-4">
          Sign in as Captain
        </Link>
      </div>
      <Toaster richColors />
    </form>
  );
}

export default UserLogin;
