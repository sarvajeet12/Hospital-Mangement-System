import React, { useState } from "react";
import "./SendMsg.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const URL = "http://localhost:5000/api/v1/send";

const SendMsg = () => {
  const [userMsg, setUserMsg] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const navigate = useNavigate();

  // ------------------------------------------------------ Handle Input -------------------------------------------
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserMsg({
      ...userMsg,
      [name]: value,
    });
  };

  // ? ---------------------------------- connecting fronted with backend and storing data in database -----------------------------

  // * handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userMsg);

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userMsg),
      });

      const resp_data = await response.json();

      if (response.ok) {
        // clear the value form input after submitting
        setUserMsg({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        // notification
        toast.success("Message Send Successfully", {
          autoClose: 1000, // auto close in 3sec
        });

        // navigate
        navigate("/");
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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          required
          onChange={handleInput}
          value={userMsg.name}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleInput}
          value={userMsg.email}
        />

        <input
          type="number"
          name="phone"
          placeholder="Mobile Number"
          required
          onChange={handleInput}
          value={userMsg.phone}
        />

        <textarea
          name="message"
          placeholder="Message"
          required
          onChange={handleInput}
          value={userMsg.message}
        ></textarea>

        <div>
          <input type="submit" value="Send" className="btn" required />
        </div>
      </form>
    </>
  );
};

export default SendMsg;
