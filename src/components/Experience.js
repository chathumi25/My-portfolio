import colorSharp from "../assets/img/color-sharp.png";
import experience from "../assets/img/experience.png";

export const Experience = () => {
    return (
        <section className="experience" id="experience">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="experience-bx wow zoomIn">
                            <h2>Experience</h2>
                            <div className="row align-items-center">
                                {/* Profile / Experience Image */}
                                <div className="col-md-4 text-center">
                                    <img
                                        src={experience}
                                        alt="experience-img"
                                        className="experience-img"
                                    />
                                </div>

                                {/* Details Section */}
                                <div className="col-md-8">
                                    <h3 style={{ textAlign: "left", marginBottom: "15px", marginTop: "40px" }}>
                                        Seeking Internship – Full Stack / Software Engineer
                                    </h3>
                                    <h5 style={{ textAlign: "left"}}>
                                        Currently open for internship opportunities | 2025
                                    </h5>
                                    {/*<ul style={{ textAlign: "left", marginTop: "15px" }}>*/}
                                    {/*    <li>*/}
                                    {/*        Developed and maintained web applications using Laravel, Vue.js, and MySQL.*/}
                                    {/*    </li>*/}
                                    {/*    <li>*/}
                                    {/*        Designed and implemented RESTful APIs to streamline business processes, including payment settlement management.*/}
                                    {/*    </li>*/}
                                    {/*    <li>*/}
                                    {/*        Collaborated with cross-functional teams in an Agile environment to deliver scalable software solutions.*/}
                                    {/*    </li>*/}
                                    {/*    <li>*/}
                                    {/*        Gained hands-on experience in frontend-backend connectivity, database integration, and testing workflows.*/}
                                    {/*    </li>*/}
                                    {/*</ul>*/}
                                    <p style={{ textAlign: "justify"}}>
                                        As a third-year undergraduate with a strong foundation in full stack development,
        I am actively seeking an internship opportunity to apply my skills in real-world
        software engineering projects. I have hands-on experience with modern web
        technologies, problem-solving, and building responsive applications through
        academic projects and self-learning. I am eager to contribute to a dynamic team,
        learn industry best practices, and grow as a developer.
                                    </p>
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
