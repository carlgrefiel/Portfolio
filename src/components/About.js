export default function About(props) {
  return (
    <section
      id="about"
      className="xl:py-[80px] lg:py-[80px] md:py-[80px] py-10"
      onMouseEnter={() => props.setIsActive(1)}
    >
      <h2 className="xl:text-3xl lg:text-2xl text-xl font-semibold text-center my-3">
        About Me
      </h2>
      <div className=" xl:w-[800px] w-4/5 mx-auto shadow-2xl p-5 rounded-lg  dark:bg-zinc-600 bg-gray-50">
        <p className="lg:text-xl md:text-lg text-md py-8 leading-8 lg:px-16 px-1 text-center">
          I earned a Bachelor of Science in Information Technology from Holy
          Name University. I learned much about programming languages like HTML,
          CSS, JavaScript, and PHP at Holy Name University. I also improved my
          design abilities by learning how to create visually appealing and
          user-friendly user interfaces. I finished several projects that
          required me to collaborate with other students to develop websites and
          applications that met specific requirements and produced measurable
          results.
        </p>
      </div>
    </section>
  );
}
