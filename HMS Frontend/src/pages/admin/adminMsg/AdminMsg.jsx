import React, { useEffect, useState } from "react";
import { useAuth } from "../../../store/Auth";
import "./AdminMsg.css";

const URL = "http://localhost:5000/api/v1/getallmsg";
const AdminMsg = () => {
  const [msg, setMsg] = useState([]);

  const { authorizationToken } = useAuth();

  // *------------------------------------------- Get all message ------------------------------------------------------
  const getAllMsg = async () => {
    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      const userData = await response.json();

      setMsg(userData);
    } catch (error) {
      console.log("Message Data Error" + error);
    }
  };

  useEffect(() => {
    getAllMsg(); // function call
  }, []);

  return (
    <div>
      <h1>Messages</h1>
      <div className="msgBox">
        {msg && msg.length > 0 ? (
          msg.map((item, index) => {
            return (
              <div key={index} className="msg">
                <div>
                  <h2>Name: </h2>
                  <p>{item.name}</p>
                </div>
                <div>
                  <h2>Email: </h2>
                  <p>{item.email}</p>
                </div>
                <div>
                  <h2>Phone: </h2>
                  <p>{item.phone}</p>
                </div>
                <div>
                  <h2>Message: </h2>
                  <p>{item.message}</p>
                </div>
              </div>
            );
          })
        ) : (
          <h2>No Appointments Found!</h2>
        )}
      </div>
    </div>
  );
};

export default AdminMsg;
