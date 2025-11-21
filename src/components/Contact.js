import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

import linkedinIcon from "../assets/img/linkedinIcon.png";
import emailIcon from "../assets/img/emailicon.png";
import phoneIcon from "../assets/img/phone.svg";

export const Contact = () => {
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/chathumi-rathnayaka-53b813398", "_blank");
  };

  const handleEmailClick = () => {
    window.open("mailto:chathumirathnayka@gmail.com", "_blank");
  };

  const handlePhoneClick = () => {
    window.open("tel:+94779243878", "_self");
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">

          {/* LEFT SIDE IMAGE */}
          <Col md={6} className="mb-4">
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact"
                />
              )}
            </TrackVisibility>
          </Col>

          {/* RIGHT SIDE TEXT + BUTTONS */}
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  
                  <h2 className="mb-4 contact-title">Get In Touch</h2>

                  {/* CONTACT BUTTONS */}
<div className="new-email-bx d-flex flex-column gap-3 ">

  {/* PHONE */}
  <button
    type="button"
    onClick={handlePhoneClick}
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "flex",   // left alignment
      textAlign: "left",
      gap: "16px",
      padding: "16px 22px",
      width: "100%",
      background: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.18)",
      borderRadius: "14px",
      color: "white",
      fontSize: "17px"
    }}
  >
    <img src={phoneIcon} alt="phone" style={{ width: "22px", height: "22px" }} />
    077 924 3878
  </button>

  {/* EMAIL */}
  <button
    type="button"
    onClick={handleEmailClick}
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      textAlign: "left",
      gap: "16px",
      padding: "16px 22px",
      width: "100%",
      background: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.18)",
      borderRadius: "14px",
      color: "white",
      fontSize: "17px"
    }}
  >
    <img src={emailIcon} alt="email" style={{ width: "22px", height: "22px" }} />
    chathumirathnayka@gmail.com
  </button>

  {/* LINKEDIN */}
  <button
    type="button"
    onClick={handleLinkedInClick}
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      textAlign: "left",
      gap: "16px",
      padding: "16px 22px",
      width: "100%",
      background: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.18)",
      borderRadius: "14px",
      color: "white",
      fontSize: "17px"
    }}
  >
    <img src={linkedinIcon} alt="linkedin" style={{ width: "22px", height: "22px" }} />
    LinkedIn Profile
  </button>

</div>

                  {/* ========================= */}
                  {/* BOTTOM PROFESSIONAL TEXT  */}
                  {/* ========================= */}

                  <p className="contact-bottom-text">
                    Whether you have an opportunity, a question, or just want to say hello  
                    I’m always open to connecting. Feel free to reach out anytime.
                  </p>

                  <div className="contact-info-line">
                    📍 Based in Colombo, Sri Lanka | ✔ Available for Internships
                  </div>

                  

                  {/* FOOTER */}
                  <div className="contact-footer">
                    © {new Date().getFullYear()} Chathumi Rathnayaka — All Rights Reserved
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
