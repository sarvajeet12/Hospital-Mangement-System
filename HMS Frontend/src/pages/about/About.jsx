import React from "react";
import "./About.css";

// images
import aboutSection1 from "../../assets/images/aboutSection1.jpg";
import aboutSection2 from "../../assets/images/aboutSection2.jpg";

const About = () => {
  return (
    <div className="aboutSection">
      {/* first section */}
      <div className="firstSection grid gridTwoTemplate">
        <div>
          <h1>Learn More About Us | HMS Medical Institute</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            numquam iure deserunt explicabo doloremque, nisi enim eaque a nulla?
            Reprehenderit ducimus vero quae suscipit! Illum impedit aliquam
            quisquam nam cum reiciendis molestiae, et cupiditate necessitatibus!
            Nostrum ipsam necessitatibus pariatur ab, quia quis impedit!
            Adipisci laudantium nisi numquam quos nihil. Iste?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            unde vel architecto sunt voluptate id vero iste deleniti nisi? Hic
            tenetur sapiente vel saepe nobis velit consequuntur magni itaque
            ducimus nihil est culpa, molestiae ratione enim fugit corporis non
            sed placeat facere suscipit distinctio! Accusamus ipsa et
            architecto, eum esse minus. Sunt illum nemo itaque consequatur, odit
            deleniti quisquam saepe mollitia voluptate facilis modi delectus
            rerum. Rerum aut debitis mollitia quos, quas aspernatur est eligendi
            earum enim ab incidunt suscipit.
          </p>
        </div>
        <div>
          <img src={aboutSection1} alt="about_image" />
        </div>
      </div>

      {/* Second Section */}
      <div className="secondSection grid gridTwoTemplate">
        <div>
          <img src={aboutSection2} alt="about_image" />
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
    </div>
  );
};

export default About;
