import React, { useEffect, useState } from "react";
import "./Search.css";

const DoctorsURL = "http://localhost:5000/api/v1/get/doctors";

const Search = () => {
  const [doctors, setDoctors] = useState([]);

  // -------------------------------------------------------- Get  Doctor data ---------------------------------------------

  const getAllDoctors = async () => {
    try {
      const response = await fetch(DoctorsURL, {
        method: "GET",
      });

      const userData = await response.json();
      setDoctors(userData);
      console.log(doctors);
    } catch (error) {
      console.log("Get doctors Error" + error);
    }
  };

  useEffect(() => {
    getAllDoctors(); //function call
  }, []);

  //   --------------------------------------------------search handle ------------------------------------------------------------

  const searchHandle = async (e) => {
    let key = e.target.value;
    if (key) {
      let response = await fetch(`http://localhost:5000/api/v1/search/${key}`);

      const resp_data = await response.json();
      if (resp_data) {
        setDoctors(resp_data);
      }
    } else [getAllDoctors()];
  };

  return (
    <div className="searchSection">
      <div>
        <input
          type="search"
          name=""
          id=""
          placeholder="Search Doctors"
          onChange={searchHandle}
        />
      </div>
      <div className="cardSection grid gridTemplateCol">
        {doctors && doctors.length > 0 ? (
          doctors.map((item, index) => {
            return (
              <div className="card" key={index}>
                <div>
                  <img
                    src={`http://localhost:5000/images/${item.image}`}
                    alt=""
                  />
                </div>
                <div>
                  <p>
                    <span>Name : </span> <span>{item.name}</span>
                  </p>
                  <p>
                    <span>Email : </span> <span>{item.email}</span>
                  </p>
                  <p>
                    <span>Phone : </span> <span>{item.phone}</span>
                  </p>
                  <p>
                    <span>Department : </span> <span>{item.department}</span>
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <h1 className="noDoctorsFound">No Doctors Found</h1>
        )}
      </div>
    </div>
  );
};

export default Search;
