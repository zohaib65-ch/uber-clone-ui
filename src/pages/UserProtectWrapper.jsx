import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UserProtectWrapper({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/user-login");
    }
  }, [navigate]);

  return <>{children}</>;
}

export default UserProtectWrapper;
