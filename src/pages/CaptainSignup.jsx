import { useState } from "react";
import { Link } from "react-router-dom";
import { Toaster, toast } from "sonner";

function CaptainSignup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setCaptainData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
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
    <form onSubmit={handleSubmit} className="flex items-start justify-center bg-white min-h-screen p-4">
      <div className="w-full max-w-sm">
         <img className='w-20 mb-6' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">What's our Captain name</label>
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
              className="w-1/2  py-3 pl-4 pr-4 border border-gray-300 rounded-xl text-gray-900 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">What's our Captain email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="hello@sarthak.com"
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
          Login
        </button>

        <p className="text-center font-semibold text-sm">
          Already have a account?{" "}
          <Link to="/captain-login" className="text-blue-600">
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
  );
}

export default CaptainSignup;
