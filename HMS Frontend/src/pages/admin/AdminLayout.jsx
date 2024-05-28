import React from "react";

import { Outlet } from "react-router-dom";
import AdminNav from "../../components/AdminNav";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../store/Auth";

const AdminLayout = () => {
  const { user, isLoading } = useAuth();

  //if not loggedIn
  if (user == null) {
    return <Navigate to="/" />;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!user.isAdmin) {
    console.log("hello");
    return <Navigate to="/" />;
  }

  return (
    <>
      <AdminNav />
      <Outlet />
    </>
  );
};

export default AdminLayout;
