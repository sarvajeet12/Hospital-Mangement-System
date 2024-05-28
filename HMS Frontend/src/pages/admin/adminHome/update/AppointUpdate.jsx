import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../../store/Auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./AppointUpdate.css";

const AppointUpdate = () => {
  const [userUpdate, setUserUpdate] = useState({
    status: "",
  });

  const navigate = useNavigate();
  const params = useParams();
  const { authorizationToken } = useAuth();

  // *------------------------------------------- Get single user data
  const getUserById = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/users/${params.id}`, //get id from  url parameter
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      const userData = await response.json();

      setUserUpdate(userData);
    } catch (error) {
      console.log("userData Error" + error);
    }
  };

  useEffect(() => {
    getUserById(); // function call
  }, []);
  // *-------------------------------------------End  Get single user data

  // ?------------------------------------------------------------ after getting data of users , now update -----------------------------------

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUserUpdate({
      ...userUpdate,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/update/${params.id}`, //get id from  url parameter
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(userUpdate),
        }
      );

      if (response.ok) {
        toast.success("Updated Successfully", {
          autoClose: 1000,
        });
        navigate("/admin");
      } else {
        toast.error("Not Updated Successfully", {
          autoClose: 1000,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="updateSection">
      <h1 className="heading">Update Appointment Details</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" disabled value={userUpdate.name} />
        <input type="text" disabled value={userUpdate.appointDate} />
        <input type="text" disabled value={userUpdate.doctor} />
        <input type="text" disabled value={userUpdate.department} />
        <select name="status" value={userUpdate.status} onChange={handleInput}>
          <option value="pending">Pending</option>
          <option value="accepted">Accepted</option>
          <option value="rejected">Rejected</option>
        </select>

        <div>
          <input type="submit" value="Update Appointment" className="btn" />
        </div>
      </form>
    </div>
  );
};

export default AppointUpdate;
