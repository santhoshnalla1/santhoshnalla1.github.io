import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { Jumbotron } from "../components/home/migration";
import { mainBody, repos, customProjects, projectDetails } from "../editable-stuff/config";
import axios from "axios";

const ProjectDetailPage = () => {
  const location = useLocation();
  const params = useParams();
  const initialProject = location.state && location.state.project ? location.state.project : null;
  const [project, setProject] = React.useState(initialProject);
  const [loading, setLoading] = React.useState(!initialProject);

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

      <Jumbotron id="project" className="m-0">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-start">
            {loading ? (
              <p className="lead text-center">Loading...</p>
            ) : project ? (
              <>
                {role && (
                  <section className="mb-4">
                    <h2 className="h5 text-uppercase text-muted mb-2">Role</h2>
                    <p className="lead mb-0">{role}</p>
                  </section>
                )}

                <section className="mb-4">
                  <h2 className="h5 text-uppercase text-muted mb-2">Overview</h2>
                  {description.split("\n").map((para, idx) => (
                    <p key={idx} className="lead mb-2">{para}</p>
                  ))}
                </section>

                {details && details.sections && details.sections.length > 0 && details.sections.map((section, index) => (
                  <section key={`detail-section-${index}`} className="mb-4">
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
                              <img src={src} alt={caption || `project-image-${i}`} className="img-fluid rounded shadow-sm" />
                              {caption && <div className="text-muted small mt-2">{caption}</div>}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </section>
                ))}

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
        </div>
      </Jumbotron>
    </main>
  );
};

export default ProjectDetailPage;

