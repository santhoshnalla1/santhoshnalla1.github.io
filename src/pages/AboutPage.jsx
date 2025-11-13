import React from "react";
import { Jumbotron } from "../components/home/migration";
import { mainBody } from "../editable-stuff/config";

const AboutPage = () => {
  return (
    <main className="pt-0">
      {/* Title section on white background */}
      <section
        style={{
          background: `linear-gradient(136deg,${mainBody.gradientColors})`,
          backgroundSize: "1200% 1200%",
          marginTop: "-56px",
          paddingTop: "56px",
        }}
      >
        <div className="container pt-5 pb-5">
          <h1 className="display-2 text-center mb-0 text-light">About</h1>
        </div>
      </section>

      {/* Content section on the site's grey background */}
      <Jumbotron id="about" className="m-0">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <section className="mb-5">
              <h2 className="h2 mb-3">Education</h2>
              <div className="text-start mx-auto" style={{ maxWidth: 900 }}>
                <h3 className="h5 text-uppercase text-muted mb-2">Program</h3>
                <ul className="lead list-unstyled mb-4">
                  <li>
                    <span className="fw-semibold">Degree:</span> B.S. in Computer Engineering - Georgia Institute of Technology
                  </li>
                  <li>
                    <span className="fw-semibold">Expected Graduation:</span> May 2027
                  </li>
                  <li>
                    <span className="fw-semibold">Concentration:</span> Distributed System & Software Design and Systems & Architecture
                  </li>
                </ul>

                <h3 className="h5 text-uppercase text-muted mb-2">Relevant Courses</h3>
                <ul className="lead mb-4">
                  <li>Data Structures & Algorithms</li>
                  <li>Objects and Design</li>
                  <li>Object-Oriented Programming</li>
                  <li>Design and Analysis of Algorithms</li>
                </ul>

                <h3 className="h5 text-uppercase text-muted mb-2">Planned Courses</h3>
                <ul className="lead mb-0">
                  <li>Programming HW/SW System</li>
                  <li>Circuit Analysis</li>
                  <li>Digital Design Lab</li>
                  <li>Design - Operating Systems</li>
                </ul>
              </div>
            </section>

            <section className="mb-5">
              <h2 className="h2 mb-3">Relevant Work Experience</h2>
              <div className="text-start mx-auto" style={{ maxWidth: 900 }}>
                <h3 className="h5 text-uppercase text-muted mb-2">Georgia Tech EcoCAR EV Challenge</h3>
                <p className="lead mb-2"><strong>Subsystem Design and Integration Engineer</strong> - Aug 2025 - Present</p>
                <ul className="lead mb-4">
                  <li>Designed and modeled a lightweight false floor in Siemens NX for component integration within tight packaging constraints.</li>
                  <li>Validated structural integrity using FEA (Altair Inspire); presented results to ensure compliance with EcoCAR safety standards.</li>
                  <li>Led fabrication of the false floor using university shop resources; translated CAD into a reliable physical assembly.</li>
                  <li>Addressed NVH challenges by designing custom-fit sound insulation panels to improve cabin comfort.</li>
                </ul>

                <h3 className="h5 text-uppercase text-muted mb-2">STEMPOWERed</h3>
                <p className="lead mb-2"><strong>Web Development Intern (Remote)</strong> - Aug 2023 - May 2024</p>
                <ul className="lead mb-0">
                  <li>Contributed to frontend redesign using Agile sprints; improved performance metrics by 20 and reduced load time by 15%.</li>
                  <li>Built and deployed five responsive UI components with JavaScript and CSS for desktop/tablet/mobile.</li>
                  <li>Participated in code reviews and GitHub workflows; helped the team achieve 95% on-time delivery.</li>
                  <li>Documented technical processes to support team knowledge sharing and onboarding.</li>
                </ul>
              </div>
            </section>

            <section className="mb-3">
              <h2 className="h2 mb-3">Career Goals</h2>
              <div className="text-start mx-auto" style={{ maxWidth: 900 }}>
                <h3 className="h5 text-uppercase text-muted mb-2">Near Future</h3>
                <ul className="lead mb-4">
                  <li>Secure hands-on internships aligned with Distributed Systems and Systems & Architecture.</li>
                  <li>Deepen practical experience across software, systems, and integration projects.</li>
                </ul>

                <h3 className="h5 text-uppercase text-muted mb-2">Post‑Graduation</h3>
                <ul className="lead mb-4">
                  <li>Work as an engineer to build a strong technical foundation and leadership skills.</li>
                </ul>

                <h3 className="h5 text-uppercase text-muted mb-2">Long Term</h3>
                <ul className="lead mb-0">
                  <li>Pursue an MBA to combine engineering expertise with business strategy.</li>
                  <li>Transition into leadership roles such as Engineering Manager or Product Manager.</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </Jumbotron>
    </main>
  );
};

export default AboutPage;