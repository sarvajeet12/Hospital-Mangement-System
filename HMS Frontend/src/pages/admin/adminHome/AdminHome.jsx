import React, { useEffect, useState } from "react";
import "./AdminHome.css";

import adminImage from "../../../assets/images/adminMainImage.jpeg";
import AppointSection from "./appointmentSection/AppointSection";

const AppointURL = "http://localhost:5000/api/v1/get/appointment";
const DoctorsURL = "http://localhost:5000/api/v1/get/doctors";

import { useAuth } from "../../../store/Auth";

const AdminHome = () => {
  const [appointment, setAppointment] = useState([]);
  const [doctors, setDoctors] = useState([]);

  const { user, authorizationToken } = useAuth();

  // *------------------------------------------- Get all Appointment data------------------------------------------------------

  const getAllAppointment = async () => {
    try {
      const response = await fetch(AppointURL, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      const userData = await response.json();
      setAppointment(userData);
    } catch (error) {
      console.log("Appointment Data Error" + error);
    }
  };

  // *------------------------------------------- Get all doctors data------------------------------------------------------
  const getAllDoctors = async () => {
    try {
      const response = await fetch(DoctorsURL, {
        method: "GET",
      });

      const userData = await response.json();
      setDoctors(userData);
    } catch (error) {
      console.log("Appointment Data Error" + error);
    }
  };

  useEffect(() => {
    getAllAppointment(); // function call
    getAllDoctors(); //function call
  }, []);

  return (
    <div className="adminHomeSection">
      {/* header section */}
      <div className="headerSection grid gridThreeUnequalTemplate">
        {/* first section */}
        <div>
          <div>
            <img src={adminImage} alt="" />
          </div>
          <div>
            <h1>
              <span>Welcome </span>
              <span>{user ? `${user.name}` : ""}</span>
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
              laudantium sunt architecto est similique dolorum voluptas sed aut
              ea hic.
            </p>
          </div>
        </div>

        {/* second section */}
        <div>
          <h3>Total Appointments</h3>
          <h2>{appointment.length}</h2>
        </div>

        {/* third section */}
        <div>
          <h3>Registered Doctors</h3>
          <h2>{doctors.length}</h2>
        </div>
      </div>

      {/* appointment section */}
      <div className="appointmentSection">
        <h1>Appointments</h1>
        <AppointSection />
      </div>
    </div>
  );
};

export default AdminHome;
