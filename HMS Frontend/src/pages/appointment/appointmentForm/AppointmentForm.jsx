import React, { useEffect, useState } from "react";
import "./AppointmentForm.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../store/Auth";

const URL = "http://localhost:5000/api/v1/appointment";
const DoctorsURL = "http://localhost:5000/api/v1/get/doctors";

const AppointmentForm = () => {
  const [dateDob, setDateBob] = useState(false);
  const [dateAppoint, setDateAppoint] = useState(false);

  const [doctors, setDoctors] = useState([]);

  const [userAppoint, setUserAppoint] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    appointDate: "",
    department: "",
    doctor: "",
    address: "",
  });

  const navigate = useNavigate();

  const { authorizationToken } = useAuth();

  // TODO : handle Date input------------------------------
  const handleFocusDOB = () => {
    setDateBob(true);
  };

  const handleBlurDOB = () => {
    setDateBob(false);
  };

  const handleFocusAppoint = () => {
    setDateAppoint(true);
  };

  const handleBlurAppoint = () => {
    setDateAppoint(false);
  };
  // TODO : handle Date input------------------------------

  // * Department List
  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];
  // -------------------------------------------------------- Get Doctor Doctor data ---------------------------------------------

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
    getAllDoctors(); //function call
  }, []);

  // ------------------------------------------------------ handleInput---------------------------

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // dynamically
    setUserAppoint({
      ...userAppoint,
      [name]: value,
      // username: value
    });
  };

  // ? ---------------------------------- connecting fronted with backend and storing data in database -----------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userAppoint);

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          Authorization: authorizationToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userAppoint),
      });

      const resp_data = await response.json();
      // console.log(resp_data);
      console.log(response);

      if (response.ok) {
        setUserAppoint({
          name: "",
          email: "",
          phone: "",
          dob: "",
          gender: "",
          appointDate: "",
          department: "",
          doctor: "",
          address: "",
        });

        // notification
        toast.success(" Appointment Send Successfully", {
          autoClose: 1000, // auto close in 3sec
        });

        // navigate
        navigate("/appointment");
      } else {
        // validation in alert box
        toast.error(
          resp_data.extraDetails ? resp_data.extraDetails : resp_data.message,
          {
            autoClose: 3000, // auto close in 3sec
          }
        );
      }

      console.log(response);
    } catch (error) {
      console.log("Register", error);
    }
  };

  // ? ---------------------------------------------------------- End : connecting fronted with backend ----------------------------------------

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* first */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            onChange={handleInput}
            value={userAppoint.name}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleInput}
            value={userAppoint.email}
          />
        </div>

        {/* second */}
        <div>
          <input
            type="number"
            name="phone"
            placeholder="Mobile Number"
            required
            onChange={handleInput}
            value={userAppoint.phone}
          />
          <input
            type={dateDob ? "date" : "text"}
            name="dob"
            placeholder="Date of Birth"
            onFocus={handleFocusDOB}
            onBlur={handleBlurDOB}
            required
            onChange={handleInput}
            value={userAppoint.dob}
          />
        </div>

        {/* third */}
        <div>
          <select
            className="appointmentSelect"
            name="gender"
            required
            onChange={handleInput}
            value={userAppoint.gender}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type={dateAppoint ? "date" : "text"}
            placeholder="Appointment Date"
            onFocus={handleFocusAppoint}
            onBlur={handleBlurAppoint}
            required
            name="appointDate"
            onChange={handleInput}
            value={userAppoint.dateAppoint}
          />
        </div>
        <div>
          <select
            className="appointmentSelect"
            required
            name="department"
            onChange={handleInput}
            value={userAppoint.department}
          >
            <option value="">Select Department</option>
            {departmentsArray.map((depart, index) => {
              return (
                <option value={depart} key={index}>
                  {depart}
                </option>
              );
            })}
          </select>
          <select
            required
            className="appointmentSelect"
            name="doctor"
            onChange={handleInput}
            value={userAppoint.doctor}
          >
            <option value="">Select Doctor</option>
            {doctors.map((doctor, index) => {
              return (
                <option value={doctor.name} key={index}>
                  {doctor.name}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <textarea
            name="address"
            placeholder="Address"
            onChange={handleInput}
            value={userAppoint.address}
            required
          ></textarea>
        </div>
        <div>
          <input type="submit" value="Get Appointment" className="btn" />
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
