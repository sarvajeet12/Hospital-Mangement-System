import React from "react";

import "./Departments.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// images
import img1 from "../../../assets/images/departmentImage/pedia.jpg";
import img2 from "../../../assets/images/departmentImage/ortho.jpg";
import img3 from "../../../assets/images/departmentImage/cardio.jpg";
import img4 from "../../../assets/images/departmentImage/neuro.jpg";
import img5 from "../../../assets/images/departmentImage/onco.jpg";
import img6 from "../../../assets/images/departmentImage/radio.jpg";
import img7 from "../../../assets/images/departmentImage/therapy.jpg";
import img8 from "../../../assets/images/departmentImage/derma.jpg";
import img9 from "../../../assets/images/departmentImage/ent.jpg";

const Departments = () => {
  const departmentsArray = [
    {
      name: "Pediatrics",
      imageUrl: img1,
    },
    {
      name: "Orthopedics",
      imageUrl: img2,
    },
    {
      name: "Cardiology",
      imageUrl: img3,
    },
    {
      name: "Neurology",
      imageUrl: img4,
    },
    {
      name: "Oncology",
      imageUrl: img5,
    },
    {
      name: "Radiology",
      imageUrl: img6,
    },
    {
      name: "Physical Therapy",
      imageUrl: img7,
    },
    {
      name: "Dermatology",
      imageUrl: img8,
    },
    {
      name: "ENT",
      imageUrl: img9,
    },
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={[
          // "superLargeDesktop",
          // "desktop",
          "tablet",
          "mobile",
        ]}
      >
        {departmentsArray.map((item, index) => {
          return (
            <div key={index} className="card">
              <h2>{item.name}</h2>
              <img src={item.imageUrl} alt="Department" />
            </div>
          );
        })}
      </Carousel>
      ;
    </>
  );
};

export default Departments;
