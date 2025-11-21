import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

import linkedinIcon from "../assets/img/linkedinIcon.png";
import emailIcon from "../assets/img/emailicon.png";
import phoneIcon from "../assets/img/phone.svg";

export const Contact = () => {
  const openLink = (url) => window.open(url, "_blank");
  const callPhone = () => window.open("tel:+94779243878", "_self");
  const sendEmail = () => window.open("mailto:chathumirathnayka@gmail.com", "_self");

  // 🔥 Fully cleaned common button style
  const btnStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",   // EXACT LEFT ALIGN
    gap: "14px",
    width: "100%",
    padding: "16px 20px",
    background: "rgba(255, 255, 255, 0.08)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    borderRadius: "14px",
    color: "#fff",
    fontSize: "17px",
    textAlign: "left",
    cursor: "pointer",
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">

          {/* LEFT IMAGE */}
          <Col md={6} className="mb-5">
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  src={contactImg}
                  alt="Contact"
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                />
              )}
            </TrackVisibility>
          </Col>

          {/* RIGHT CONTENT */}
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  
                  <h2 className="mb-4 contact-title">Get In Touch</h2>

                  {/* CONTACT BUTTONS */}
                  <div className="d-flex flex-column gap-3">

                    {/* PHONE */}
                    <button style={btnStyle} onClick={callPhone}>
                      <img src={phoneIcon} alt="Phone" style={{ width: "22px" }} />
                      <span>077 924 3878</span>
                    </button>

                    {/* EMAIL */}
                    <button style={btnStyle} onClick={sendEmail}>
                      <img src={emailIcon} alt="Email" style={{ width: "22px" }} />
                      <span>chathumirathnayka@gmail.com</span>
                    </button>

                    {/* LINKEDIN */}
                    <button
                      style={btnStyle}
                      onClick={() => openLink("https://www.linkedin.com/in/chathumi-rathnayaka-53b813398")}
                    >
                      <img src={linkedinIcon} alt="LinkedIn" style={{ width: "22px" }} />
                      <span>LinkedIn Profile</span>
                    </button>

                  </div>

                  {/* EXTRA TEXT */}
                  <p className="contact-bottom-text mt-4">
                    Whether you have an opportunity, a question, or just want to say hello, 
                    I’m always open to connecting. Feel free to reach out anytime.
                  </p>

                  <div className="contact-info-line">
                    📍 Based in Colombo, Sri Lanka | ✔ Available for Internships
                  </div>

                  

                </div>
              )}
            </TrackVisibility>
          </Col>

        </Row>
      </Container>
    </section>
  );
};
