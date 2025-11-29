import React from "react";
import { Jumbotron } from "../components/home/migration";
import { mainBody } from "../editable-stuff/config";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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

      {/* Content section */}
      <Jumbotron id="about" className="m-0">
        <div className="container">
          {/* Education */}
          <section className="mb-5">
            <h2 className="h2 mb-3 text-center">Education</h2>
            <div className="text-start mx-auto" style={{ maxWidth: 900 }}>
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <Card.Title as="h5" className="mb-3">Georgia Institute of Technology</Card.Title>
                  <ul className="lead list-unstyled mb-0">
                    <li className="mb-1">
                      <span className="fw-semibold">Degree:</span> B.S. in Computer Engineering
                    </li>
                    <li className="mb-1">
                      <span className="fw-semibold">Expected Graduation:</span> May 2027
                    </li>
                    <li>
                      <span className="fw-semibold">Concentration:</span> Distributed Systems & Software Design and Systems & Architecture
                    </li>
                    <li>
                      <span className="fw-semibold">GPA:</span> 3.9/4.0
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </div>
          </section>

          {/* Relevant Courses as cards */}
          <section className="mb-3">
            <h2 className="h2 mb-4 text-center">Relevant Courses</h2>
            <Row className="g-4">
              {[
                {
                  title: "Design and Analysis of Algorithms",
                  code: "CS 3510",
                  description: "Analyzed the time and space complexity of computational problems using asymptotic notation and the Master Theorem. Designed efficient solutions for complex systems using dynamic programming, divide-and-conquer strategies, and graph algorithms."
                },
                {
                  title: "Objects and Design",
                  code: "CS 2340",
                  description: "Collaborated in an Agile team environment to develop a full-stack application, utilizing Git for version control and UML for architectural planning. Applied object-oriented design principles and software design patterns to create scalable, maintainable code."
                },
                {
                  title: "Data Structures and Algorithms",
                  code: "CS 1332",
                  description: "Implemented core data structures in Java, including HashMaps, AVL trees, and Min/Max Heaps, to manage data efficiency. Optimized application performance by evaluating algorithmic complexity and selecting appropriate sorting and searching strategies."
                },
                {
                  title: "Programming HW/SW System",
                  code: "ECE 2035",
                  description: "Developed low-level system software using C and Assembly language to interface directly with hardware components. Managed dynamic memory allocation and pointer arithmetic to maximize runtime efficiency in embedded environments."
                },
                {
                  title: "Digital Design Lab",
                  code: "ECE 2031",
                  description: "Designed and implemented complex digital logic circuits using VHDL on FPGA hardware platforms. Constructed and debugged physical electromechanical systems, integrating sensors and actuators with digital control logic."
                },
                
                {
                  title: "Digital System Design",
                  code: "ECE 2020",
                  description: "Designed combinational and sequential logic circuits using Boolean algebra, Karnaugh maps, and finite state machines. Analyzed digital system timing and logic minimization to optimize circuit architecture and performance."
                },
                {
                  title: "Discrete Mathematics",
                  code: "CS 2050",
                  description: "Applied discrete mathematical concepts, such as propositional logic and graph theory, to model and solve computational problems. Constructed formal proofs to validate the logical correctness of algorithms and data structures."
                },
                {
                  title: "Intro to Object-Oriented Programming",
                  code: "CS 1331",
                  description: "Developed object-oriented applications in Java demonstrating mastery of inheritance, polymorphism, and encapsulation. Designed interactive graphical user interfaces (GUIs) and implemented robust exception handling protocols."
                },
              ].map((course, idx) => {
                const subject = (course.code || "").split(" ")[0];
                const badgeClass = subject === "ECE" ? "bg-warning text-dark" : "bg-primary";
                return (
                  <Col key={`course-${idx}`} xs={12} md={6}>
                    <Card className="h-100 shadow-sm border-0">
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <Card.Title as="h5" className="mb-0">{course.title}</Card.Title>
                          <span className={`badge ${badgeClass}`}>{course.code}</span>
                        </div>
                        <Card.Text className="text-muted small mb-0">{course.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </section>
        </div>
      </Jumbotron>
    </main>
  );
};

export default AboutPage;