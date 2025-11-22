// frontend/src/components/Projects.jsx
import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav, Modal, Button } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";

// Images
import easyQuizImg from "../assets/img/easyquiz.png";
import expenseImg from "../assets/img/expense.png";
import solarImg from "../assets/img/solar.png";
import miniImg from "../assets/img/mini.png";
import campusPlusImg from "../assets/img/campusplus.png";
import quickSwapImg from "../assets/img/quicswap.png";
import ismImg from "../assets/img/ism.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

// Project Card Component
const ProjectCard = ({ title, description, imgUrl, tags = [], github, live, onClick }) => (
  <div
    className="project-card p-3 rounded shadow-sm bg-dark-card"
    style={{ cursor: "pointer" }}
    onClick={onClick}
  >
    {/* IMAGE */}
    <div
      className="project-image mb-3"
      style={{
        height: 250,
        overflow: "hidden",
        borderRadius: 10,
        background: "#0a1124",
      }}
    >
      <img
        src={imgUrl}
        alt={title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>

    {/* TITLE */}
    <h5
      className="text-white mb-2 text-center"
      style={{ fontSize: "20px", fontWeight: "700" }}
    >
      {title}
    </h5>

    {/* DESCRIPTION */}
    <p
      className="text-blue mb-2"
      style={{
        textAlign: "justify",
        fontSize: "15px",
        lineHeight: "1.6",
        color: "rgba(255,255,255,0.85)",
      }}
    >
      {description}
    </p>

    {/* TAGS */}
    <div className="d-flex flex-wrap gap-2 mb-3">
      {tags.map((t, i) => (
        <span key={i} className="badge bg-secondary text-white small">
          {t}
        </span>
      ))}
    </div>

    {/* BUTTONS */}
    <div className="d-flex justify-content-between">
      <a className="btn btn-outline-light btn-sm" href={github} target="_blank" rel="noreferrer">
        Code
      </a>
      <a className="btn btn-primary btn-sm" href={live} target="_blank" rel="noreferrer">
        Live Demo
      </a>
    </div>
  </div>
);

export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const HOST_PLACEHOLDER = "#";

  // ALL PROJECTS
  const projects = [
    {
      id: 1,
      title: "Easy Quiz",
      description:
        "Role-based quiz application (Admin / Student). Admin manages grades, subjects, quizzes; students take quizzes and view progress.",
      category: "web",
      images: [easyQuizImg],
      tags: ["MERN", "Tailwind", "Role-based", "REST API"],
      github: "https://github.com/chathumi25/Easy-Quiz",
      live: HOST_PLACEHOLDER,
      features: [
        "Admin dashboard",
        "Progress tracking",
        "Quiz results & ranking",
        "Student management",
      ],
    },
    {
  id: 2,
  title: "Expense Tracker",
  description:
    "Track income and expenses, charts, recent activity and full CRUD operations.",
  category: "web",
  images: [expenseImg],
  tags: ["MERN", "Charts", "Tailwind"],
  github: "https://github.com/chathumi25/expense-tracker",
  live: "https://expense-tracker-five-kappa-41.vercel.app/login",
  features: ["CRUD", "Chart visualisation", "Filters & history"],
},
    {
      id: 3,
      title: "Solar Vision",
      description:
        "Solar energy monitoring system with real-time tracking & analytics.",
      category: "web",
      images: [solarImg],
      tags: ["MERN", "Realtime", "MongoDB"],
      github: "https://github.com/chathumi25/Solar-Vision",
      live: HOST_PLACEHOLDER,
      features: ["Realtime tracking", "Usage patterns", "Alerts"],
    },
    {
      id: 4,
      title: "Library Management System",
      description:
        "Books CRUD, borrow/return flow and admin dashboard.",
      category: "web",
      images: [miniImg],
      tags: ["MERN", "MySQL", "CRUD"],
      github: "https://github.com/iro2002/Web-project---Library-Management-System",
      live: HOST_PLACEHOLDER,
      features: ["Book management", "Borrow/Return system"],
    },
    {
      id: 5,
      title: "Internship Management System (IMS)",
      description:
        "MERN + MySQL system for managing student internships, company details, supervisors and progress reports.",
      category: "web",
      images: [ismImg],
      tags: ["MERN", "MySQL", "Admin Panel", "Student Portal"],
      github: "#",
      live: HOST_PLACEHOLDER,
      features: [
        "Student–company assignment",
        "Supervisor details",
        "Internship progress tracking",
        "Admin dashboard controls",
      ],
    },
    {
      id: 6,
      title: "Campus Plus (Mobile)",
      description:
        "Faculty news & announcements app with admin posting.",
      category: "mobile",
      images: [campusPlusImg],
      tags: ["Android", "Java", "Firebase"],
      github: "#",
      live: HOST_PLACEHOLDER,
      features: ["News feed", "Admin controls"],
    },
    {
      id: 7,
      title: "Quick Swap (Mobile)",
      description:
        "Mobile buy & sell marketplace application.",
      category: "mobile",
      images: [quickSwapImg],
      tags: ["Android", "E-commerce"],
      github: "#",
      live: HOST_PLACEHOLDER,
      features: ["Orders", "Product listing"],
    },
  ];

  const handleShow = (project) => {
    setSelectedProject(project);
    setCurrentIndex(0);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-wrapper">
        <Container>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

                {/* CENTERED HEADER */}
                <h2 className="projects-title text-center">Featured Projects</h2>
                <p className="projects-sub text-center">
                  Selected work built using MERN, Android, SQL.
                </p>

                <Tab.Container id="projects-tabs" defaultActiveKey="all">
                  <Nav variant="pills" className="nav-pills mb-4 justify-content-center">
                    <Nav.Item><Nav.Link eventKey="all">All</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="web">Web Applications</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="mobile">Mobile Applications</Nav.Link></Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="all">
                      <Row>
                        {projects.map((p) => (
                          <Col key={p.id} xs={12} md={6} className="mb-4">
                            <ProjectCard {...p} imgUrl={p.images[0]} />
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="web">
                      <Row>
                        {projects.filter(p => p.category === "web").map((p) => (
                          <Col key={p.id} xs={12} md={6} className="mb-4">
                            <ProjectCard {...p} imgUrl={p.images[0]} />
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="mobile">
                      <Row>
                        {projects.filter(p => p.category === "mobile").map((p) => (
                          <Col key={p.id} xs={12} md={6} className="mb-4">
                            <ProjectCard {...p} imgUrl={p.images[0]} />
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>

              </div>
            )}
          </TrackVisibility>
        </Container>
      </div>

      {/* Background */}
      <img className="background-image-right" src={colorSharp2} alt="" style={{ opacity: 0.22 }} />

      {/* MODAL */}
      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Body className="p-0 position-relative">
          <button
            onClick={handleClose}
            className="position-absolute"
            style={{
              right: 12,
              top: 12,
              zIndex: 20,
              background: "transparent",
              border: "none",
              fontSize: 16,
              color: "#fff",
              cursor: "pointer",
            }}
          >
            ×
          </button>

          {selectedProject && (
            <div className="p-3 bg-dark" style={{ color: "#fff" }}>

              <div className="d-flex gap-3 flex-wrap">
                <div style={{ flex: 1 }}>
                  <img
                    src={selectedProject.images[currentIndex]}
                    alt={selectedProject.title}
                    style={{ width: "100%", height: 300, objectFit: "cover", borderRadius: 8 }}
                  />
                </div>

                <div style={{ width: 30 }}>
                  <h4>{selectedProject.title}</h4>
                  <p className="text-muted" style={{ textAlign: "justify" }}>
                    {selectedProject.description}
                  </p>

                  <div className="mb-2">
                    {selectedProject.tags.map((t) => (
                      <span key={t} className="badge bg-secondary me-1">
                        {t}
                      </span>
                    ))}
                  </div>

                  <strong>Features</strong>
                  <ul style={{ paddingLeft: 18 }}>
                    {selectedProject.features.map((f, i) => (
                      <li key={i} className="small">{f}</li>
                    ))}
                  </ul>

                  <div className="d-flex gap-2 mt-2">
                    <a className="btn btn-outline-light btn-sm" href={selectedProject.github}>Code</a>
                    <a className="btn btn-primary btn-sm" href={selectedProject.live}>Live Demo</a>
                  </div>
                </div>
              </div>

              {/* IMAGE SLIDER */}
              {selectedProject.images.length > 1 && (
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <Button variant="light" size="sm">
                    ‹ Prev
                  </Button>
                  <span className="text-muted small">
                    Image {currentIndex + 1} of {selectedProject.images.length}
                  </span>
                  <Button variant="light" size="sm">
                    Next ›
                  </Button>
                </div>
              )}

            </div>
          )}

        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Projects;
