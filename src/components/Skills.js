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
import { styles } from "./styles/styles";

export default function Skills(props) {
  return (
    <section
      onMouseEnter={() => props.setIsActive(3)}
      id="skills"
      className={styles.section}
    >
      <h2 className={styles.h2}>Skills</h2>
      <Fade bottom duration={2000} distance="150px">
        <div className={styles.divContainerSkills}>
          <div className={styles.divItemSkills}>
            <img className={styles.imgSkills} alt="react" src={react} />
          </div>
          <div className={styles.divItem}>
            <img className={styles.imgSkills} alt="next" src={next} />
          </div>
          <div className={styles.divItem}>
            <img className={styles.imgSkills} alt="html" src={html} />
          </div>
          <div className={styles.divItem}>
            <img className={styles.imgSkills} alt="css" src={css} />
          </div>
          <div className={styles.divItem}>
            <img className={styles.imgSkills} alt="js" src={js} />
          </div>
          <div className={styles.divItem}>
            <img className={styles.imgSkills} alt="git" src={git} />
          </div>
          <div className={styles.divItem}>
            <img className={styles.imgSkills} alt="github" src={github} />
          </div>
          <div className={styles.divItem}>
            <img className={styles.imgSkills} alt="figma" src={figma} />
          </div>
          <div className={styles.divItem}>
            <img className={styles.imgSkills} alt="adobe" src={adobe} />
          </div>
          <div className={styles.divItem}>
            <img className={styles.imgSkills} alt="laravel" src={laravel} />
          </div>
          <div className={styles.divItem}>
            <img className={styles.imgSkills} alt="php" src={php} />
          </div>
        </div>
      </Fade>
    </section>
  );
}
