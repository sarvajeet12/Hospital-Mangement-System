import React from "react";
import "./AdminNav.css";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../store/Auth";

const AdminNav = () => {
  return (
    <div className="adminNavSection">
      <ul>
        <li>
          <Link to={"/admin"}>Home</Link>
        </li>
        <li>
          <Link to={"/admin/add/doctors"}>Add Doctors</Link>
        </li>
        <li>
          <Link to={"/admin/messages"}>Messages</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminNav;
