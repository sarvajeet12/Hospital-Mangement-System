import React from "react";
import "./Home.css";

// images
import heroSection1 from "../../assets/images/heroSection1.jpg";
import heroSection2 from "../../assets/images/heroSection1.jpg";

// components
import Departments from "./departments/Departments";
import SendMsg from "./sendMsg/SendMsg";

const Home = () => {
  return (
    <div className="homeSection">
      {/* first section */}
      <div className="firstSection grid gridTwoTemplate">
        <div>
          <h1>
            Welcome to ZeeCare Medical Institute | Your Trusted Healthcare
            Provider
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            numquam iure deserunt explicabo doloremque, nisi enim eaque a nulla?
            Reprehenderit ducimus vero quae suscipit! Illum impedit aliquam
            quisquam nam cum reiciendis molestiae, et cupiditate necessitatibus!
            Nostrum ipsam necessitatibus pariatur ab, quia quis impedit!
            Adipisci laudantium nisi numquam quos nihil. Iste?
          </p>
        </div>
        <div>
          <img src={heroSection1} alt="home_image" />
        </div>
      </div>

      {/* Second Section */}
      <div className="secondSection grid gridTwoTemplate">
        <div>
          <img src={heroSection2} alt="home_image" />
        </div>
        <div>
          <h3>Biography</h3>
          <h1>Who We Are</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            officiis minus quis reiciendis repudiandae excepturi aperiam,
            necessitatibus assumenda error ducimus harum quaerat quasi
            dignissimos sit architecto incidunt! Eveniet tempora dolorum
            voluptatem harum laborum ab aliquid magnam minus, quis quia, in
            commodi hic, a iusto minima debitis itaque sed! Commodi magni omnis
            facilis. Perferendis temporibus labore commodi quidem, nihil ea
            porro! Hic dolorum cum tenetur ex officia debitis ipsa ad cumque?
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus,
            officia deserunt laudantium atque reprehenderit aperiam at
            aspernatur odio aliquam sapiente dolore provident, ea illo ab
            facilis. Illo quia provident commodi dicta magni quasi possimus eius
            quibusdam, voluptatem, laborum ad voluptas!
          </p>
        </div>
      </div>

      {/* Third Section (Carousel) : Departments */}
      <div className="thirdSection">
        <h1>Departments</h1>
        <div>
          <Departments />
        </div>
      </div>

      {/* Fourth Section  : Send Us a message */}
      <div className="thirdSection">
        <h1>Send Us A Message</h1>
        <div className="formSection">
          <SendMsg />
        </div>
      </div>
    </div>
  );
};

export default Home;
