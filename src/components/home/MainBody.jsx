import React from "react";
import Container from "react-bootstrap/Container";
import Typist from 'react-typist-component';
import { Jumbotron } from "./migration";
import { about } from "../../editable-stuff/config";

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          background: `linear-gradient(136deg,${gradient})`,
          backgroundSize: "1200% 1200%",
        }}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <Container>
          <div className="row align-items-center justify-content-center gx-5">
            {/* Left: Text content */}
            <div className="col-12 col-md-8 col-lg-7 order-2 order-md-1">
              <h1 ref={ref} className="display-1 mb-2 text-center text-md-start">
                {title}
              </h1>
              <Typist>
                <div className="lead typist mb-3 text-start">
                  {message}
                </div>
              </Typist>

              {Array.isArray(about?.message) && about.message.length > 0 && (
                <div className="mt-2" style={{ maxWidth: 900 }}>
                  {about.message.map((para, idx) => (
                    <p key={`about-hero-${idx}`} className="lead mb-2 text-center text-md-start">
                      {para}
                    </p>
                  ))}
                </div>
              )}

              <div className="mt-3 d-flex flex-wrap align-items-center gap-3">
                {(() => {
                  const linkedin = Array.isArray(icons) ? icons.find(i => (i.image || "").includes("linkedin")) : null;
                  const github = Array.isArray(icons) ? icons.find(i => (i.image || "").includes("github")) : null;
                  return (
                    <div className="d-flex align-items-center gap-3">
                      {linkedin?.url && (
                        <a
                          key="linkedin-icon"
                          target="_blank"
                          rel="noopener noreferrer"
                          href={linkedin.url}
                          aria-label="My linkedin"
                        >
                          <i className={`fab ${linkedin.image} fa-3x socialicons`} />
                        </a>
                      )}

                      {/* Gmail icon as mailto */}
                      <a
                        key="gmail-icon"
                        href="mailto:santhosh.nalla06@gmail.com"
                        aria-label="Email me"
                      >
                        <i className="fas fa-envelope fa-3x socialicons" />
                      </a>

                      {github?.url && (
                        <a
                          key="github-icon"
                          target="_blank"
                          rel="noopener noreferrer"
                          href={github.url}
                          aria-label="My github"
                        >
                          <i className={`fab ${github.image} fa-3x socialicons`} />
                        </a>
                      )}
                    </div>
                  );
                })()}

                {/* Resume last */}
                {about?.resume && (
                  <a
                    className="btn btn-outline-light btn-lg"
                    href={about.resume}
                    target="_blank"
                    rel="noreferrer noopener"
                    role="button"
                    aria-label="Resume/CV"
                  >
                    Resume
                  </a>
                )}
              </div>
            </div>

            {/* Right: Profile image */}
            <div className="col-12 col-md-4 col-lg-3 text-center text-md-start mb-4 mb-md-0 order-1 order-md-2">
              {about?.imageLink && (
                <img
                  className="border border-secondary rounded-circle shadow-sm"
                  src={about.imageLink}
                  alt="profilepicture"
                  width={280}
                  height={280}
                />
              )}
            </div>
          </div>
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
