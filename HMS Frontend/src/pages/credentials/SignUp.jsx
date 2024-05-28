import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Credentials.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const URL = "http://localhost:5000/api/v1/register";

const SignUp = () => {
  const [dateDob, setDateBob] = useState(false);

  const [userRegister, setUserRegister] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    gender: "",
    dob: "",
  });

  const navigate = useNavigate();

  // ---------------------------------------------------- handle the input value --------------------------------------------
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    // dynamically
    setUserRegister({
      ...userRegister,
      [name]: value,
      // username: value
    });
  };

  // ? ---------------------------------- connecting fronted with backend and storing data in database -----------------------------

  // * handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userRegister);

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userRegister),
      });

      const resp_data = await response.json();

      if (response.ok) {
        // Collecting userData, token and userId

        // storeTokenInLS(resp_data.token);

        // clear the value form input after submitting
        setUserRegister({
          name: "",
          email: "",
          phone: "",
          password: "",
          gender: "",
          dob: "",
        });

        // notification
        toast.success("SingUp Successfully", {
          autoClose: 1000, // auto close in 3sec
        });

        // navigate
        navigate("/login");
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

  return (
    <div className="credentialsSection singUp">
      <h2>Sign Up</h2>
      <p>Please Login To Continue</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        perferendis magnam soluta eum sequi officiis adipisci laboriosam,
        aliquid vel sed autem expedita molestias esse. Ullam explicabo
        recusandae voluptatibus! Voluptatem, ab.
      </p>

      {/* SignUp form */}
      <div className="signUpForm">
        <form onSubmit={handleSubmit}>
          {/* first  */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              onChange={handleInput}
              value={userRegister.name}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleInput}
              value={userRegister.email}
            />
          </div>
          <div>
            <input
              type="number"
              name="phone"
              placeholder="Mobile Number"
              required
              onChange={handleInput}
              value={userRegister.phone}
            />
            <input
              type={dateDob ? "date" : "text"}
              name="dob"
              placeholder="Date of Birth"
              onFocus={handleFocusDOB}
              onBlur={handleBlurDOB}
              required
              onChange={handleInput}
              value={userRegister.dob}
            />
          </div>
          <div>
            <select
              name="gender"
              required
              onChange={handleInput}
              value={userRegister.gender}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleInput}
              value={userRegister.password}
            />
          </div>
          <p>
            Already Registered? <Link to={"/login"}>Login Now</Link>
          </p>

          <div>
            <input type="submit" value="Register" className="btn" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
