import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, repos, about, skills } from "../editable-stuff/config.js";
import { NavLink } from "./home/migration";
import { Link, useLocation } from "react-router-dom";

const Navigation = React.forwardRef((props, ref) => {
  // const { showBlog, FirstName } = config;
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      if (!ref?.current) {
        // When no anchor ref is provided (non-home pages), rely on window scroll
        setIsTop(currPos.y <= 5);
      } else {
        currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
          ? setIsTop(true)
          : setIsTop(false);
      }
      setScrollPosition(currPos.y);
    },
    [navBottom],
    undefined,
    true
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    if (!ref?.current) {
      setIsTop(scrollPosition <= 5);
    } else {
      navBottom - scrollPosition >= ref.current.offsetTop
        ? setIsTop(false)
        : setIsTop(true);
    }
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  const location = useLocation();

  const scrollTopIfSameRoute = (targetPath) => (e) => {
    if (location && location.pathname === targetPath) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top  ${!isTop ? "navbar-white" : "navbar-transparent"
        }`}
      expand="lg"
    >
      <Navbar.Brand className="navbar-brand">
        {`<${mainBody.firstName} />`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto">
          {/* Home */}
          <NavLink
            className="nav-item lead"
            to="/"
            onClick={scrollTopIfSameRoute("/")}
          >
            Home
          </NavLink>

          {/* About */}
          {about.show && (
            <NavLink
              className="nav-item lead"
              to="/about"
              onClick={scrollTopIfSameRoute("/about")}
            >
              About
            </NavLink>
          )}

          {/* Projects */}
          {repos.show && (
            <NavLink to={{ pathname: "/", hash: "#projects" }}>
              Projects
            </NavLink>
          )}

          {/* Resume */}
          <NavLink
            className="nav-item lead"
            href={about.resume}
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
