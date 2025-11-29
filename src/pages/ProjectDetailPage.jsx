import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { Jumbotron } from "../components/home/migration";
import { mainBody, repos, customProjects, projectDetails } from "../editable-stuff/config";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Modal from "react-bootstrap/Modal";

const ProjectDetailPage = () => {
  const location = useLocation();
  const params = useParams();
  const initialProject = location.state && location.state.project ? location.state.project : null;
  const [project, setProject] = React.useState(initialProject);
  const [loading, setLoading] = React.useState(!initialProject);
  const [lightbox, setLightbox] = React.useState({ show: false, src: "", caption: "" });

  React.useEffect(() => {
    if (initialProject) return;
    const slug = params.slug;
    // Try to resolve from custom projects first
    const fromCustom = customProjects.find(p => p.title && p.title.toLowerCase().replace(/\s+/g, "-") === slug);
    if (fromCustom) {
      setProject({
        name: fromCustom.title,
        role: fromCustom.role || null,
        description: fromCustom.description + (fromCustom.note ? `\n${fromCustom.note}` : ""),
        svn_url: fromCustom.demo || null,
        stargazers_count: null,
        languages_url: null,
        pushed_at: null,
        custom: true,
        raw: fromCustom,
      });
      setLoading(false);
      return;
    }
    // Fallback: try to fetch from GitHub repos by name
    const repoName = slug; // assume slug matches repo name
    const API = "https://api.github.com";
    const url = `${API}/repos/${repos.gitHubUsername}/${repoName}`;
    axios.get(url)
      .then(res => {
        setProject(res.data);
      })
      .catch(() => {
        setProject(null);
      })
      .finally(() => setLoading(false));
  }, [initialProject, params.slug]);

  const title = project?.name || "Project";
  const description = project?.description || "";
  const role = project?.role || null;
  const repoUrl = project?.svn_url || null;
  const isGithub = Boolean(project?.languages_url) || (repoUrl && repoUrl.includes("github.com"));
  const slug = (project?.name || params.slug || "project").toLowerCase().replace(/\s+/g, "-");
  const details = projectDetails && projectDetails[slug];
  const tech = details?.tech || [];
  const links = details?.links || [];
  const video = details?.video;

  return (
    <main className="pt-0">
      <section
        style={{
          background: `linear-gradient(136deg,${mainBody.gradientColors})`,
          backgroundSize: "1200% 1200%",
          marginTop: "-56px",
          paddingTop: "56px",
        }}
      >
        <div className="container pt-5 pb-5">
          <h1 className="display-4 text-center mb-0 text-light">{title}</h1>
        </div>
      </section>

      {/* Hero meta bar */}
      <section className="bg-contrast">
        <div className="container py-3">
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {role && (
              <Badge bg="secondary" className="px-3 py-2">
                Role: {role}
              </Badge>
            )}
            {Array.isArray(tech) &&
              tech.map((t, i) => (
                <Badge key={`tech-${i}`} bg="dark" className="px-3 py-2">
                  {t}
                </Badge>
              ))}
            {links &&
              links.map((lnk, i) => (
                <a
                  key={`link-${i}`}
                  href={lnk.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn btn-outline-dark btn-sm"
                >
                  {lnk.label}
                </a>
              ))}
          </div>
        </div>
      </section>

      <Jumbotron id="project" className="m-0">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-start">
            {loading ? (
              <p className="lead text-center">Loading...</p>
            ) : project ? (
              <>
                <section className="mb-4">
                  <h2 className="h5 text-uppercase text-muted mb-2">Overview</h2>
                  {description.split("\n").map((para, idx) => (
                    <p key={idx} className="lead mb-2">{para}</p>
                  ))}
                </section>

                {/* Optional responsive video; if there's a 'Description' section, render after it instead */}
                {video && !(details?.sections || []).some(s => (s.heading || "").trim().toLowerCase() === "description") && (
                  <section className="mb-4">
                    <h2 className="h5 text-uppercase text-muted mb-2">Video Demo</h2>
                    <div className="ratio ratio-16x9">
                      {video.youtube ? (
                        <iframe
                          src={video.youtube}
                          title="Project video demo"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      ) : (
                        <video
                          src={video.src}
                          poster={video.poster}
                          controls
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      )}
                    </div>
                  </section>
                )}

                {details && details.sections && details.sections.length > 0 && details.sections.map((section, index) => {
                  const headingText = section.heading || `Section ${index + 1}`;
                  const anchorId = headingText.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                  return (
                  <section id={anchorId} key={`detail-section-${index}`} className="mb-4">
                    {section.heading && (
                      <h2 className="h5 text-uppercase text-muted mb-2">{section.heading}</h2>
                    )}
                    {Array.isArray(section.paragraphs) && section.paragraphs.map((p, i) => (
                      <p key={`p-${i}`} className="lead mb-2">{p}</p>
                    ))}
                    {Array.isArray(section.images) && section.images.length > 0 && (
                      <div className="row">
                        {section.images.map((img, i) => {
                          const src = typeof img === "string" ? img : img.src;
                          const caption = typeof img === "object" && img.caption ? img.caption : null;
                          return (
                            <div className="col-md-6 mb-3" key={`img-${i}`}>
                              <img
                                src={src}
                                alt={caption || `project-image-${i}`}
                                className="img-fluid rounded shadow-sm"
                                style={{ cursor: "zoom-in" }}
                                onClick={() => setLightbox({ show: true, src, caption: caption || "" })}
                              />
                              {caption && <div className="text-muted small mt-2">{caption}</div>}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* If this is the Description section and a video exists, show the video right below */}
                    {(section.heading || "").trim().toLowerCase() === "description" && video && (
                      <div className="mt-3">
                        <h2 className="h5 text-uppercase text-muted mb-2">Video Demo</h2>
                        <div className="ratio ratio-16x9">
                          {video.youtube ? (
                            <iframe
                              src={video.youtube}
                              title="Project video demo"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            />
                          ) : (
                            <video
                              src={video.src}
                              poster={video.poster}
                              controls
                              style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                          )}
                        </div>
                      </div>
                    )}
                  </section>
                )})}

                {(isGithub || repoUrl) && (
                  <section className="mb-2">
                    <h2 className="h5 text-uppercase text-muted mb-2">Links</h2>
                    <ul className="lead mb-0">
                      {isGithub && (
                        <li>
                          <a href={repoUrl} target="_blank" rel="noreferrer noopener">GitHub Repository</a>
                        </li>
                      )}
                      {!isGithub && repoUrl && (
                        <li>
                          <a href={repoUrl} target="_blank" rel="noreferrer noopener">Project Link</a>
                        </li>
                      )}
                    </ul>
                  </section>
                )}
              </>
            ) : (
              <p className="lead text-center">Project details not found.</p>
            )}
          </div>
          {/* Sidebar quick facts */}
          <div className="col-lg-4">
            <div style={{ position: "sticky", top: 80 }}>
              <Card className="mb-4 shadow-sm">
                <Card.Body>
                  <Card.Title as="h6" className="text-uppercase text-muted">On this page</Card.Title>
                  <ul className="mb-3">
                    {details?.sections?.map((s, i) => {
                      const text = s.heading || `Section ${i + 1}`;
                      const anchorId = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                      return (
                        <li key={`toc-${i}`} className="mb-1">
                          <a href={`#${anchorId}`} className="text-decoration-none">{text}</a>
                        </li>
                      );
                    })}
                  </ul>

                  {Array.isArray(details?.atAGlance) && details.atAGlance.length > 0 && (
                    <>
                      <Card.Title as="h6" className="text-uppercase text-muted mt-3">At a glance</Card.Title>
                      <ul className="mb-3">
                        {details.atAGlance.map((item, i) => (
                          <li key={`glance-${i}`}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {(isGithub || !!repoUrl || (Array.isArray(links) && links.length > 0)) && (
                    <div className="mt-3 d-flex flex-wrap gap-2">
                      {isGithub && repoUrl && (
                        <a href={repoUrl} target="_blank" rel="noreferrer noopener" className="btn btn-outline-dark btn-sm">
                          GitHub
                        </a>
                      )}
                      {!isGithub && repoUrl && (
                        <a href={repoUrl} target="_blank" rel="noreferrer noopener" className="btn btn-outline-dark btn-sm">
                          Project Link
                        </a>
                      )}
                      {links && links.map((lnk, i) => (
                        <a key={`sidelink-${i}`} href={lnk.href} target="_blank" rel="noreferrer noopener" className="btn btn-outline-dark btn-sm">
                          {lnk.label}
                        </a>
                      ))}
                    </div>
                  )}
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>

        {/* Lightbox modal */}
        <Modal show={lightbox.show} onHide={() => setLightbox({ show: false, src: "", caption: "" })} centered size="lg">
          <Modal.Body className="p-0">
            {lightbox.src && (
              <img src={lightbox.src} alt={lightbox.caption || "project-image"} className="img-fluid w-100" />
            )}
          </Modal.Body>
          {lightbox.caption && (
            <div className="px-3 py-2 text-muted small">{lightbox.caption}</div>
          )}
        </Modal>
      </Jumbotron>
    </main>
  );
};

export default ProjectDetailPage;

