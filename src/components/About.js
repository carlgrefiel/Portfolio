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
            I earned a Bachelor of Science in Information Technology from Holy
            Name University. I learned much about programming languages like
            HTML, CSS, JavaScript, and PHP at Holy Name University. I also
            improved my design abilities by learning how to create visually
            appealing and user-friendly user interfaces. I finished several
            projects that required me to collaborate with other students to
            develop websites and applications that met specific requirements and
            produced measurable results.
          </p>
        </div>
      </Rotate>
    </section>
  );
}
