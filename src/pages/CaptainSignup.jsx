import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

function CaptainSignup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCaptain = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, newCaptain);

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.user);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    if (firstName && lastName && email && password && vehicleColor && vehiclePlate && vehicleCapacity && vehicleType) {
      toast.success("Signup successful!", { position: "top-center" });
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setVehicleColor("");
      setVehiclePlate("");
      setVehicleCapacity("");
      setVehicleType("");
    } else {
      toast.error("Please fill all fields!", { position: "top-center" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-start justify-center bg-white min-h-screen p-4">
      <div className="w-full max-w-sm">
        <img className="w-20 " src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
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
              className="w-1/2 py-3 pl-4 pr-4 border border-gray-300 rounded-xl text-gray-900 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all"
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

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Enter Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            className="w-full py-3 pl-4 pr-4 border border-gray-300 rounded-xl text-gray-900 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Vehicle Information</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              placeholder="Vehicle Color"
              className="w-full py-3 pl-4 pr-4 border border-gray-300 rounded-xl text-gray-900 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all"
            />
            <input
              type="text"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              placeholder="Vehicle Plate"
              className="w-full py-3 pl-4 pr-4 border border-gray-300 rounded-xl text-gray-900 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all"
            />
          </div>
        </div>

        <div className="flex gap-4 mb-4">
          <input
            type="number"
            value={vehicleCapacity}
            onChange={(e) => setVehicleCapacity(e.target.value)}
            placeholder="Vehicle Capacity (e.g., 4)"
            className="w-1/2 py-3 pl-4 pr-4 border border-gray-300 rounded-xl text-gray-900 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all"
          />

          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="w-1/2 py-3 pl-4 pr-4 border border-gray-300 rounded-xl text-gray-900 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all"
          >
            <option value="" disabled>
              Vehicle Type
            </option>
            <option value="car">Car</option>
            <option value="motorcycle">Motorcycle</option>
            <option value="auto">Auto</option>
          </select>
        </div>

        <button type="submit" className="w-full bg-black text-white py-3 rounded-lg text-lg font-bold mb-4 hover:bg-gray-900">
          Sign Up
        </button>

        <p className="text-center font-semibold text-sm">
          Already have an account?{" "}
          <Link to="/captain-login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <Toaster richColors />
    </form>
  );
}

export default CaptainSignup;
