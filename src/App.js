import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  repos,
  leadership,
  skills,
  getInTouch,
  experiences
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
// import { Blog } from "./components/blog/Blog";
// import BlogPost from "./components/blog/BlogPost";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Leadership from "./components/home/Leadership.jsx";
import AboutPage from "./pages/AboutPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

import Experience from "./components/home/Experience";

const RoutesWithFade = () => {
  const location = useLocation();
  return (
    <div key={`${location.pathname}${location.search}${location.hash}`} className="page-fade">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      </Routes>
    </div>
  );
};

const Home = React.forwardRef((props, ref) => {
  const location = useLocation();

  React.useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");

    const tryScroll = (attempt = 0) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (attempt < 5) {
        setTimeout(() => tryScroll(attempt + 1), 200);
      }
    };

    tryScroll(0);
  }, [location.hash]);
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      {/* AboutMe section removed from home; content merged into hero */}
      {
        experiences.show && (
          <Experience experiences={experiences}/>
        )
      }
      {repos.show && (
        <Project
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
        />
      )}
      {leadership.show && (
        <Leadership
          heading={leadership.heading}
          message={leadership.message}
          img={leadership.images}
          imageSize={leadership.imageSize}
        />
      )}
      {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        />
      )}
      
    </>
  );
});

const ScrollManager = () => {
  const location = useLocation();
  React.useEffect(() => {
    // Skip auto-scroll for in-page anchors we handle (projects/skills)
    if (location.hash === "#projects" || location.hash === "#skills") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.search, location.key, location.hash]);
  return null;
};

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && <Navbar ref={titleRef} />}
      <ScrollManager />
      <RoutesWithFade />
      {/* {false && <Route path="/blog" exact component={Blog} />}
      {false && <Route path="/blog/:id" component={BlogPost} />} */}
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>
    </BrowserRouter>
  );
};

export default App;
