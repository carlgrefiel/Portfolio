import { useState } from "react";
import karu from "../assets/images/png/karu.png";
import { HashLink as Link } from "react-router-hash-link"; //to install type: npm install --save react-router-hash-link
import TypeWriterEffect from "./TypeWriterEffect";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const styles = {
  section: "xl:py-[80px] lg:py-[80px] md:py-[80px] py-10",
  divContainer: "lg:text-xl md:text-lg text-md py-5 leading-8",
  h1: "xl:text-5xl xl:font-semibold lg:text-4xl text-3xl font-medium font-serif text-gray-800 dark:text-gray-50",
  animate:
    "animate-ping rounded-full xl:h-12 lg:h-12 xl:w-44 lg:w-44 h-9 w-24  mt-10",
  imgContainer:
    " bg-gradient-to-t dark:from-gray-100 dark:to-green-600 from-gray-900 to-violet-600 rounded-full xl:w-80 xl:h-80 h-0 mx-auto invisible xl:visible ",
  button:
    "absolute bg-violet-600 dark:bg-green-600 hover:bg-green-600 dark:hover:bg-violet-600 xl:py-2 lg:py-2 py-1 lg:px-10 xl:px-10 px-8  font-bold rounded-full xl:text-2xl lg:text-xl  text-lg mt-10 font-serif ",
  link: "relative grid xl:justify-items-start justify-items-center h-28",
  typeWriter:
    "xl:text-3xl lg:text-2xl text-xl py-2  font-bold font-mono text-gray-800 dark:text-gray-50",
  span: " text-violet-700 dark:text-green-600 font-bold",
  p: "lg:text-xl md:text-lg text-md py-5 leading-8",
};

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
              <img alt="carl" className="cursor-pointer" src={karu} />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
