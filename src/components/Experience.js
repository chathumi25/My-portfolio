import colorSharp from "../assets/img/color-sharp.png";

export const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-wrapper">

        {/* Title */}
        <h2 className="experience-title">Experience</h2>

        {/* Content Box */}
        <div className="experience-content">

          <h3 className="exp-role">
            Seeking Internship – Full Stack / Software Engineer
          </h3>

          <h5 className="exp-subtitle">
            Currently open for internship opportunities | 2025
          </h5>

          <p className="exp-description">
            As a third-year undergraduate with a strong foundation in full stack
            development, I am actively seeking an internship opportunity to apply
            my skills in real-world software engineering projects. I have hands-on
            experience with modern web technologies, problem-solving, and building
            responsive applications through academic projects and self-learning.
            I am eager to contribute to a dynamic team, learn industry best
            practices, and grow as a developer.
          </p>

        </div>
      </div>

      {/* Background Shape */}
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
