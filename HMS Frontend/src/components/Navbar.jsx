import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../store/Auth";

const Navbar = () => {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setShadow(true) : setShadow(false);
    });
  }, []);

  const { isLoggedIn } = useAuth();

  return (
    <div className={`navbar container ${shadow ? "navBoxShadow" : ""}`}>
      <div>
        <h1>HMS</h1>
      </div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About Us</Link>
        </li>
        <li>
          <Link to={"/appointment"}>Appointment</Link>
        </li>
        <li>
          <Link to={"/search"}>Search Doctors</Link>
        </li>
      </ul>
      <div className="btnBox">
        {isLoggedIn ? (
          <Link to={"/logout"}>
            <button className="btn">Logout</button>
          </Link>
        ) : (
          <Link to={"/login"}>
            <button className="btn">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
