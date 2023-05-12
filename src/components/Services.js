import React from "react";
import webdesign from "../assets/images/png/webdesign.png";
import webapp from "../assets/images/png/webapp.png";
import uiux from "../assets/images/png/uiux.png";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import { styles } from "./styles/styles";

export default function Services(props) {
  return (
    <section
      onMouseEnter={() => props.setIsActive(2)}
      id="services"
      className={styles.section}
    >
      <div>
        <h2 className={styles.h2}>Services</h2>
      </div>
      <div className="lg:flex gap-5 ">
        <Fade left duration={2000} distance="150px">
          <div className={styles.divItemServices}>
            <div className="hover:scale-125 duration-500">
              <img
                className=" shadow-2xl mx-auto  rounded-lg"
                alt="webapp"
                src={webapp}
              />
            </div>
            <h3 className={styles.h3}>Web Application Development</h3>
            <p className="py-2">
              Designed and built a web application with React and Node.js. Unit
              testing and code reviews were carried out to ensure code quality
              and maintainability.
            </p>
          </div>
        </Fade>
        <Flip bottom duration={1500}>
          <div className={styles.divItemServices}>
            <div className="hover:scale-125 duration-500">
              <img
                className="shadow-2xl mx-auto  rounded-lg"
                alt="webdesign"
                src={webdesign}
              />
            </div>
            <h3 className={styles.h3}>Website Design and Development</h3>
            <p className="text-md py-2">
              Designed and built a responsive website for a non-profit
              organization. Implemented SEO best practices to boost search
              engine rankings and organic traffic.
            </p>
          </div>
        </Flip>
        <Fade right duration={2000} distance="150px">
          <div className={styles.divItemServices}>
            <div className="hover:scale-125 duration-500">
              <img
                className=" shadow-2xl mx-auto  rounded-lg"
                alt="uiux"
                src={uiux}
              />
            </div>
            <h3 className={styles.h3}>UX/UI Design for Mobile App</h3>
            <p className="py-2">
              Conducted user research and developed wireframes and prototypes
              for a mobile app. Designed and developed a user-friendly interface
              and visual design for the app.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
}
