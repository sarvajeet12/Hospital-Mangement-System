import React from "react";
import "./Footer.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer container">
      <div className="contentContainer grid gridThreeTemplate">
        {/* first */}
        <div>
          <h2>Quick Links</h2>
          <div>
            <p>
              <Link to={"/"}>Home</Link>
            </p>
            <p>
              <Link to={"/appointment"}>Appointment</Link>
            </p>
            <p>
              <Link to={"/about"}>About</Link>
            </p>
          </div>
        </div>
        {/* second */}
        <div>
          <h2>Hours</h2>
          <div>
            <p>Monday: 9:00am - 11:00pm</p>
            <p>Tuesday: 9:00am - 11:00pm</p>
            <p>Wednesday: 9:00am - 11:00pm</p>
            <p>Thursday: 9:00am - 11:00pm</p>
            <p>Friday: 9:00am - 11:00pm</p>
            <p>Saturday: 9:00am - 11:00pm</p>
          </div>
        </div>
        {/* third */}
        <div>
          <h2>Contact</h2>
          <div>
            <p>
              <FaPhoneAlt /> +91 123-456-7890
            </p>
            <p>
              <MdEmail /> hms@gmail.com
            </p>
            <p>
              <FaLocationDot /> Delhi, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
