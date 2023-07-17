import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Login from './Login'
const Navbar = () => {
  const token = localStorage.getItem("token");
  console.log("****", token);
  const [auth, setAuth] = useState("");

  useEffect(() => {
    setAuth(token);
  }, [token]);
  const logout = () => {
    localStorage.clear();
  };
  return (
    <div style={{ display: "flex", gap: "20px" }} className="navContainer">
      {auth ? (
        <>
          <Link to="/" className="navbar">
            Home
          </Link>

          <Link to="/admin" className="navbar">
            post
          </Link>
          <Link
            style={{ position: "absolute", right: "10px", top: "15px" }}
            onClick={logout}
          >
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link to="/register" className="navbar">
            signup
          </Link>
          <Link to="/login" className="navbar">
            {" "}
            login
          </Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
