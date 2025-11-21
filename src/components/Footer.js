import { Container } from "react-bootstrap";
import linkedinIcon from "../assets/img/nav-icon1.svg";
import githubIcon from "../assets/img/github.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>

        <div className="footer-row">

          {/* LEFT SIDE — NAME */}
          <div className="footer-left">
            <span className="footer-name">Chathumi Rathnayaka</span>
          </div>

          {/* CENTER — COPYRIGHT */}
          <div className="footer-center">
            <span className="footer-copy">
              © {new Date().getFullYear()} All Rights Reserved
            </span>
          </div>

          {/* RIGHT SIDE — SOCIAL ICONS */}
          <div className="footer-right">
            <a 
              href="https://www.linkedin.com/in/chathumi-rathnayaka-53b813398"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>

            <a 
              href="https://github.com/chathumi25"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>

        </div>

      </Container>
    </footer>
  );
};
