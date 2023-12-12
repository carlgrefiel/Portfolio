import Rotate from "react-reveal/Rotate";
import { styles } from "./styles/styles";

export default function About(props) {
  return (
    <section
      id="about"
      className={styles.section}
      onMouseEnter={() => props.setIsActive(1)}
    >
      <h2 className={styles.h2_aboutme}>About Me</h2>
      <Rotate bottom right>
        <div className={styles.divContainerAbout}>
          <p className={styles.p}>
            Hi, I'm Jhon Carl Grefiel, a passionate Junior Web Developer with a
            degree in Information Technology. Proficient in HTML, CSS,
            JavaScript, and React, I specialize in crafting user-centric and
            visually appealing websites. My experience includes contributing to
            projects at Global Telemedicine Corp. and Pedicab Solutions Inc.,
            where I seamlessly integrated front-end elements with back-end
            systems. Based in Napo Alicia, Bohol, I'm enthusiastic,
            detail-oriented, and dedicated to enhancing web performance. Let's
            create something amazing together!
          </p>
        </div>
      </Rotate>
    </section>
  );
}
