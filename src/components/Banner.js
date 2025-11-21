import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import DilmiCV from "../assets/img/cv.pdf";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const toRotate = ["Fullstack Developer", "Frontend Developer", "Backend Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];

    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) setDelta(prev => prev / 2);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(400);
    }
  };

  return (
    <section
      className="banner"
      id="home"
      style={{
        background: "linear-gradient(135deg, #00060d 0%, #001a33 30%, #003366 70%, #050505 100%)",
        padding: "180px 0 260px 0",
      }}
    >
      <Container>
        <Row className="align-items-center">

          {/* LEFT — IMAGE */}
          <Col xs={12} md={5} className="text-center mb-4 mb-md-0">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img
                    src={headerImg}
                    alt="Profile"
                    style={{
                      width: "300px",
                      maxWidth: "100%",
                      borderRadius: "50%",
                      border: "5px solid rgba(255,255,255,0.25)",
                      boxShadow: "0 0 35px rgba(255,255,255,0.18)",
                    }}
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>

          {/* RIGHT — TEXT */}
          <Col xs={12} md={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeInRight" : ""}>

                  {/* Tagline */}
                  <span
                    style={{
                      display: "inline-block",
                      padding: "6px 18px",
                      borderRadius: "8px",
                      background: "rgba(255,255,255,0.12)",
                      border: "2px solid rgba(255,255,255,0.22)",
                      color: "#fff",
                      fontSize: "23px",
                      marginBottom: "45px",
                      fontWeight: 800,
                      letterSpacing: "2px",
                    }}
                  >
                    Welcome to My Portfolio 👋🚀
                  </span>

                  {/* Main Heading */}
                  <h1
                    style={{
                      fontSize: "40px",
                      fontWeight: 800,
                      lineHeight: "1.2",
                      color: "#fff",
                      marginBottom: "45px",
                    }}
                  >
                    Hi! I'm{" "}
                    <span style={{ color: "#7fbcff", fontSize: "42px" }}>
                      Chathumi Rathnayaka
                    </span>
                    <br />
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>

                  {/* Description */}
                  <p
                    style={{
                      color: "#d4d4d4",
                      fontSize: "18px",
                      marginBottom: "35px",
                      marginTop: "65px",
                      maxWidth: "550px",
                      lineHeight: "2",
                    }}
                  >
                    A passionate developer who builds clean, modern and scalable
                    web applications with a focus on performance and user-friendly design.
                  </p>

                  {/* Button */}
                  <a
                    href={DilmiCV}
                    download="Chathumi Rathnayaka (CV).pdf"
                    className="btn-download"
                  >
                    Download CV <ArrowRightCircle size={25} />
                  </a>

                </div>
              )}
            </TrackVisibility>
          </Col>

        </Row>
      </Container>
    </section>
  );
};
