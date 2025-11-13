import colorSharp from "../assets/img/color-sharp.png";
import profile from "../assets/img/profile.jpg";

export const AboutMe = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="about-bx wow zoomIn">
              <h2>About Me</h2>
              <p>
               I'm Chathumi Rathnayaka, a third-year undergraduate actively seeking an internship opportunity.As a passionate Full Stack Developer, I enjoy building modern, user-focused, and scalable web applications.Explore my portfolio to discover my skills, projects, and hands-on experience in software development.
              </p>
              <div className="row align-items-center">
                {/* Profile Picture */}
                <div className="col-md-4 text-center">
                  <img
                    src={profile}
                    alt="profileimg"
                    style={{ width: "18vw", maxWidth: "100%"}}
                  />
                </div>

                {/* Details Section */}
                <div className="col-md-8">
                  <h3 style={{ textAlign: "center", marginBottom: "15px" }}>
                    Undergraduate student
                  </h3>
                  <div className="row">
                    {/* Details Column 1 */}
                    <div className="col-md-6">
                      <p style={{ marginBottom: "5px" }}>
                        <strong>Birthday:</strong> 25. 07. 2001
                      </p>
                      <p style={{ marginBottom: "5px" }}>
                        <strong>Website:</strong> Not available
                      </p>
                      <p style={{ marginBottom: "5px" }}>
                        <strong>Phone:</strong> +94 77 924 3878
                      </p>
                      <p style={{ marginBottom: "5px" }}>
                        <strong>City:</strong> Demodara, Sri Lanka
                      </p>
                    </div>

                    {/* Details Column 2 */}
                    <div className="col-md-6">
                      <p style={{ marginBottom: "5px" }}>
                        <strong>Age:</strong> 24
                      </p>
                      <p style={{ marginBottom: "5px" }}>
                        <strong>Degree:</strong> Bachelor of Information & Communication Technology (Honours)
                      </p>
                      <p style={{ marginBottom: "5px" }}>
                        <strong>Email:</strong> chathumiofficial@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
