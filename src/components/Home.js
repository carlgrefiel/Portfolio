import { useState } from "react";
import karu from "../assets/images/png/karu.png";
import { HashLink as Link } from "react-router-hash-link"; //to install type: npm install --save react-router-hash-link
import TypeWriterEffect from "./TypeWriterEffect";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import { styles } from "./styles/styles";

export default function Home(props) {
  const [hover, setHover] = useState(false); //to change the color of animation pulse while hovering
  return (
    <section
      id="home"
      className={styles.section}
      onMouseEnter={() => props.setIsActive(0)}
    >
      <div className=" xl:flex">
        <div className={styles.divContainer}>
          <Fade left duration={2000} distance="40px">
            <h1 className={styles.h1}>
              Hello, I'm <span className={styles.span}>Jhon Carl</span>
            </h1>
            <div className={styles.typeWriter}>
              <TypeWriterEffect />
            </div>
          </Fade>

          <p className={styles.p}>
            As a skilled web developer and designer, I provide various services
            to assist you in developing the ideal website or application for
            your company.
          </p>
          <Flip bottom>
            <Link className={styles.link} to="#contact" smooth>
              <span
                className={
                  hover
                    ? ` dark:bg-violet-600 bg-green-600 ${styles.animate} `
                    : ` bg-violet-600 dark:bg-green-600 ${styles.animate}`
                }
              ></span>
              <button
                onMouseEnter={() => setHover(!hover)}
                onMouseLeave={() => setHover(!hover)}
                className={styles.button}
              >
                Hire Me
              </button>
            </Link>
          </Flip>
        </div>
        <div className="w-1/2">
          <Fade bottom duration={2000} distance="40px">
            <div className={styles.imgContainer}>
              <img alt="carl" className={styles.img} src={karu} />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
