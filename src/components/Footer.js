import { Container } from "react-bootstrap";
import linkedinIcon from "../assets/img/nav-icon1.svg";
import githubIcon from "../assets/img/github.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>

        {/* Name */}
        <h4 className="footer-name">Chathumi Rathnayaka</h4>

        {/* Social Icons */}
        <div className="footer-social">
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

        {/* Copyright */}
        <p className="footer-copy">© {new Date().getFullYear()} All Rights Reserved</p>

      </Container>
    </footer>
  );
};
