import React from "react";
import "./Appointment.css";

// images
import appointment from "../../assets/images/appointment.jpg";

import AppointmentForm from "./appointmentForm/AppointmentForm";

const Appointment = () => {
  return (
    <div className="appointmentSection">
      {/* first section */}
      <div className="firstSection grid gridTwoTemplate">
        <div>
          <h1>Schedule Your Appointment | ZeeCare Medical Institute</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            numquam iure deserunt explicabo doloremque, nisi enim eaque a nulla?
            Reprehenderit ducimus vero quae suscipit! Illum impedit aliquam
            quisquam nam cum reiciendis molestiae, et cupiditate necessitatibus!
            Nostrum ipsam necessitatibus pariatur ab, quia quis impedit!
            Adipisci laudantium nisi numquam quos nihil. Iste?
            <br />
          </p>
        </div>
        <div>
          <img src={appointment} alt="appointment_image" />
        </div>
      </div>

      {/* second Section */}
      <div className="secondSection">
        <h1>Appointment</h1>
        <AppointmentForm />
      </div>
    </div>
  );
};

export default Appointment;
