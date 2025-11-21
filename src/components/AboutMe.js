export const AboutMe = () => {
  return (
    <section
      id="about"
      className="about"
      style={{
        width: "100%",
        padding: "40px 15px",
        background:
          "linear-gradient(135deg, #000814 0%, #00172b 25%, #00305d 60%, #04111d 100%)",
      }}
    >
      {/* TITLE */}
      <h2
        className="fw-bold text-center"
        style={{
          fontSize: "3rem",
          color: "#fff",
          marginBottom: "30px",
        }}
      >
        About Me
      </h2>

      {/* INTRO */}
      <p
        style={{
          maxWidth: "780px",
          margin: "0 auto 50px auto",
          fontSize: "1.1rem",
          lineHeight: "1.8",
          textAlign: "center",
          color: "#d7d7d7",
        }}
      >
        I’m <strong style={{ color: "#fff" }}>Chathumi Rathnayaka</strong>, a
        third-year undergraduate specializing in MERN-stack development. I enjoy
        building modern, responsive, and user-friendly applications, and I’m
        seeking an internship to grow professionally.
      </p>

      {/* CARD GRID */}
      <div
        className="about-content"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* CARD 1 */}
        <div
          className="about-card glass-card"
          style={{
            flex: "1 1 300px",
            maxWidth: "350px",
            padding: "20px",
          }}
        >
          <h4>Personal Details</h4>
          <p><strong>Birthday:</strong> 25.07.2001</p>
          <p><strong>Phone:</strong> +94 77 924 3878</p>
          <p><strong>City:</strong> Demodara, Sri Lanka</p>
          <p><strong>Age:</strong> 24</p>
          <p><strong>Email:</strong> chathumirathnayka@gmail.com</p>
        </div>

        {/* CARD 2 */}
        <div
          className="about-card glass-card"
          style={{
            flex: "1 1 300px",
            maxWidth: "350px",
            padding: "20px",
          }}
        >
          <h4>Education</h4>
          <p><strong>A/L (2021):</strong> ABB</p>

          <p>
            <strong>BICT (Honours)</strong>
            <br />
            University of Colombo
          </p>

          <p><strong>Main Courses:</strong></p>
          <ul style={{ paddingLeft: "20px" }}>
            <li>Programming (Python, C)</li>
            <li>OOP (Java)</li>
            <li>DBMS</li>
            <li>Web Application Development</li>
          </ul>
        </div>

        {/* CARD 3 */}
        <div
          className="about-card glass-card"
          style={{
            flex: "1 1 300px",
            maxWidth: "350px",
            padding: "20px",
          }}
        >
          <h4>Certifications</h4>

          <strong>University of Moratuwa</strong>
          <ul style={{ paddingLeft: "20px" }}>
            <li>Python for Beginners</li>
            <li>Web Design for Beginners</li>
            <li>Python Programming</li>
            <li>Front-End Development</li>
            <li>Server-side Programming</li>
          </ul>

          <strong>Postman Certified</strong>
          <ul style={{ paddingLeft: "20px" }}>
            <li>API Fundamentals Student Expert</li>
          </ul>
        </div>
      </div>

      {/* EXTRA MOBILE CSS */}
      <style>
        {`
          @media (max-width: 768px) {
            #about h2 {
              font-size: 2.2rem;
            }

            #about p {
              font-size: 1rem;
            }

            .about-card {
              max-width: 100% !important;
            }
          }
        `}
      </style>
    </section>
  );
};
