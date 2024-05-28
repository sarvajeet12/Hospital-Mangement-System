import React, { useEffect, useState } from "react";
import doctorProfile from "../../../assets/images/doctorProfile.jpeg";
import { useNavigate } from "react-router-dom";
import "./AddDoctors.css";
import { useAuth } from "../../../store/Auth";
import { toast } from "react-toastify";

const DataURL = "http://localhost:5000/api/v1/register/doctor";

const AddDoctors = () => {
  const [dateDob, setDateBob] = useState(false);
  const [image, setImage] = useState("");

  const [doctor, setDoctor] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    department: "",
  });

  const navigate = useNavigate();

  const { authorizationToken } = useAuth();

  // ------------------------------------------------------ handle Input---------------------------

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // dynamically
    setDoctor({
      ...doctor,
      [name]: value,
      // username: value
    });
  };

  // ? ---------------------------------- connecting fronted with backend and storing data in database -----------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(doctor);

    // TODO: ------------------------------------ Validation on form -------------------------------------------------
    if (doctor.name.length < 3) {
      return toast.error("Name must be at least 3 characters long");
    }

    if (doctor.name.length > 255) {
      return toast.error("Name must not be more than 255 characters");
    }

    if (doctor.phone.length !== 10) {
      return toast.error("Phone Number must be of 10 digits");
    }

    let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!emailRegex.test(doctor.email)) {
      return toast.error("Invalid email ");
    }

    // TODO: End:  ----------------------------------- Validation on form ----------------------------------------------

    const formData = new FormData();

    formData.append("name", doctor.name);
    formData.append("email", doctor.email);
    formData.append("phone", doctor.phone);
    formData.append("dob", doctor.dob);
    formData.append("gender", doctor.gender);
    formData.append("department", doctor.department);
    formData.append("image", image);

    try {
      const response = await fetch(DataURL, {
        method: "POST",
        headers: {
          Authorization: authorizationToken,
        },
        body: formData,
      });

      const resp_data = await response.json();
      console.log("respData: ", resp_data);

      if (response.ok) {
        setDoctor({
          name: "",
          email: "",
          phone: "",
          dob: "",
          gender: "",
          department: "",
        });

        // notification
        toast.success(" Doctor Register Successfully", {
          autoClose: 1000, // auto close in 3sec
        });

        // navigate
        navigate("/admin");
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

  // TODO : handle Date input------------------------------
  const handleFocusDOB = () => {
    setDateBob(true);
  };

  const handleBlurDOB = () => {
    setDateBob(false);
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

  return (
    <div className="addDoctorSection grid gridTwoUnequalTemplate">
      {/* image box */}
      <div>
        <img src={image ? URL.createObjectURL(image) : doctorProfile} alt="" />
      </div>

      {/* doctors data */}
      <div>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <input
            type="text"
            name="name"
            id=""
            placeholder="Name"
            onChange={handleInput}
            value={doctor.name}
            required
          />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Email"
            onChange={handleInput}
            value={doctor.email}
            required
          />
          <input
            type="number"
            name="phone"
            id=""
            placeholder="Phone"
            onChange={handleInput}
            value={doctor.phone}
            required
          />
          <input
            type={dateDob ? "date" : "text"}
            name="dob"
            placeholder="Date of Birth"
            onFocus={handleFocusDOB}
            onBlur={handleBlurDOB}
            required
            onChange={handleInput}
            value={doctor.dob}
          />
          <select
            className="addDoctorSelect"
            name="gender"
            required
            onChange={handleInput}
            value={doctor.gender}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <select
            className="addDoctorSelect"
            required
            name="department"
            onChange={handleInput}
            value={doctor.department}
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

          {/* image section */}
          <input
            type="file"
            name="image"
            id=""
            required
            onChange={handleImage}
          />
          <div>
            <input type="submit" value="Register New Doctor" className="btn" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctors;
