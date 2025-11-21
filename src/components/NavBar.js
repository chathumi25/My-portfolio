import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => setActiveLink(value);

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""} variant="dark">
        <Container>

          {/* LEFT SIDE - BIG NAME */}
          <h1
            className="portfolio-name"
            onClick={() => onUpdateActiveLink("home")}
            style={{
              fontSize: "2.2rem",
              fontWeight: 800,
              margin: 0,
              cursor: "pointer",
              whiteSpace: "nowrap",
              color: "white",
            }}
          >
            Chathumi Rathnayaka
          </h1>

          <Navbar.Toggle aria-controls="navbar-nav">
            <span className="navbar-toggler-icon" />
          </Navbar.Toggle>

          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto align-items-center">

              {["home", "about", "skills", "projects", "experience"].map(
                (item) => (
                  <Nav.Link
                    key={item}
                    href={`#${item}`}
                    className={
                      activeLink === item ? "active navbar-link" : "navbar-link"
                    }
                    onClick={() => onUpdateActiveLink(item)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Nav.Link>
                )
              )}

              {/* NOW CONNECT IS NORMAL NAV LINK */}
              <Nav.Link
                href="#connect"
                className={
                  activeLink === "connect"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("connect")}
              >
                Connect
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </Router>
  );
};

export default NavBar;
