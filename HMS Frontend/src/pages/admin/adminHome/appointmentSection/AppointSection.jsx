import React, { useEffect, useState } from "react";
import "./AppointSection.css";
import { useAuth } from "../../../../store/Auth";

import { Link } from "react-router-dom";

const URL = "http://localhost:5000/api/v1/get/appointment";

const AppointSection = () => {
  const [appointment, setAppointment] = useState([]);
  const { authorizationToken } = useAuth();
  // *------------------------------------------- Get all Appointment data------------------------------------------------------

  const getAllAppointment = async () => {
    try {
      const response = await fetch(URL, {
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

  useEffect(() => {
    getAllAppointment(); // function call
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>S. no.</th>
            <th>Patient</th>
            <th>Date</th>
            <th>Doctor</th>
            <th>Department</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointment.length > 0 ? (
            appointment.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.appointDate}</td>
                  <td>{item.doctor}</td>
                  <td>{item.department}</td>
                  <td>{item.status}</td>
                  <td>
                    <Link to={`/admin/appointment/${item._id}/edit`}>
                      Update
                    </Link>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>No Appointments Found!</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AppointSection;
