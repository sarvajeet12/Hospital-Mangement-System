import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Import Pages
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Appointment from "./pages/appointment/Appointment.jsx";
import Login from "./pages/credentials/Login.jsx";
import Logout from "./pages/credentials/Logout.jsx";
import SignUp from "./pages/credentials/SignUp.jsx";
import Error from "./pages/error/Error.jsx";
import Search from "./pages/search/Search.jsx";

// Import Admin Pages
import AdminLayout from "./pages/admin/AdminLayout.jsx"; //(it is like a app)
import AdminHome from "./pages/admin/adminHome/AdminHome.jsx";
import AdminMsg from "./pages/admin/adminMsg/AdminMsg.jsx";
import AddDoctors from "./pages/admin/addDoctors/AddDoctors.jsx";
import AdminUpdate from "./pages/admin/adminHome/update/AppointUpdate.jsx";

// Tost
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Auth
import { AuthProvider } from "./store/Auth.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/appointment", element: <Appointment /> },
      { path: "/search", element: <Search /> },
      { path: "/register", element: <SignUp /> },
      { path: "/login", element: <Login /> },
      { path: "/logout", element: <Logout /> },
      { path: "*", element: <Error /> },
      {
        path: "/admin",
        element: <AdminLayout />,
        children: [
          { path: "/admin", element: <AdminHome /> },
          { path: "messages", element: <AdminMsg /> },
          { path: "add/doctors", element: <AddDoctors /> },
          { path: "appointment/:id/edit", element: <AdminUpdate /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClickrtl={true}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="colored"
        bodyClassName="toastBody"
      />
    </React.StrictMode>
  </AuthProvider>
);
