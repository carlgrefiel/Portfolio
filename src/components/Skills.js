import figma from "../assets/images/png/figma.png";
import adobe from "../assets/images/png/adobe.png";
import react from "../assets/images/png/react.png";
import next from "../assets/images/png/next.png";
import laravel from "../assets/images/png/laravel.png";
import github from "../assets/images/png/github.png";
import css from "../assets/images/png/css.png";
import html from "../assets/images/png/html.png";
import js from "../assets/images/png/js.png";
import php from "../assets/images/png/php.png";
import git from "../assets/images/png/git.png";
import Fade from "react-reveal/Fade";

const styles = {
  section: "xl:py-[80px] lg:py-[80px] md:py-[80px] py-10",
  h2: "xl:text-3xl lg:text-2xl text-xl font-semibold my-5 pl-10 ",
  divContainer: "flex flex-wrap justify-center lg:gap-10 gap-5 ",
  divItem: " w-[200px] h-[100px]  dark:bg-zinc-800 bg-gray-50 rounded-lg ",
  img: "mx-auto w-[100px] h-[100px] p-2",
};

export default function Skills(props) {
  return (
    <section
      onMouseEnter={() => props.setIsActive(3)}
      id="skills"
      className={styles.section}
    >
      <h2 className={styles.h2}>Skills</h2>
      <Fade bottom duration={2000} distance="150px">
        <div className={styles.divContainer}>
          <div className={styles.divItem}>
            <img className={styles.img} alt="react" src={react} />
          </div>
          <div className={styles.divItem}>
            <img className={styles.img} alt="next" src={next} />
          </div>
          <div className={styles.divItem}>
            <img className={styles.img} alt="html" src={html} />
          </div>
          <div className={styles.divItem}>
            <img className={styles.img} alt="css" src={css} />
          </div>
          <div className={styles.divItem}>
            <img className={styles.img} alt="js" src={js} />
          </div>
          <div className={styles.divItem}>
            <img className={styles.img} alt="git" src={git} />
          </div>
          <div className={styles.divItem}>
            <img className={styles.img} alt="github" src={github} />
          </div>
          <div className={styles.divItem}>
            <img className={styles.img} alt="figma" src={figma} />
          </div>
          <div className={styles.divItem}>
            <img className={styles.img} alt="adobe" src={adobe} />
          </div>
          <div className={styles.divItem}>
            <img className={styles.img} alt="laravel" src={laravel} />
          </div>
          <div className={styles.divItem}>
            <img className={styles.img} alt="php" src={php} />
          </div>
        </div>
      </Fade>
    </section>
  );
}
