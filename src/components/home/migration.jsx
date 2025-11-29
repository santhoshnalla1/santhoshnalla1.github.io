import React from 'react';
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export const Jumbotron = (props) => {
  const bgStyle = props.style ?? { backgroundColor: "#0b1220" };
  return (
    <div id={props.id} className={`py-3 ${props.className}`} style={bgStyle}>
      <div className="container py-5">
        {props.children}
      </div>
    </div>
  );
}

export const NavLink = (props) => {
  const { to, href, target, rel, className, children, onClick } = props;
  const linkProps = to
    ? { as: Link, to }
    : { href };

  return (
    <Nav.Link
      {...linkProps}
      target={target}
      rel={rel}
      onClick={onClick}
    >
      <span className={`nav-item lead ${className}`}>
        {children}
      </span>
    </Nav.Link>
  );
}
