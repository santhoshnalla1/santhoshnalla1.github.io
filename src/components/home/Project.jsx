import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import ProjectCard from "./ProjectCard";
import axios from "axios";
import { customProjects } from "../../editable-stuff/config";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
const API = "https://api.github.com";
// const gitHubQuery = "/repos?sort=updated&direction=desc";
// const specficQuerry = "https://api.github.com/repos/santhoshnalla1/";

const Project = ({ heading, username, length, specfic }) => {
  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const specficReposAPI = `${API}/repos/${username}`;
  const dummyProjectsArr = new Array(length + specfic.length).fill(
    dummyProject
  );

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    let repoList = [];
    try {
      // getting all repos
      const response = await axios.get(allReposAPI);
      // slicing to the length
      repoList = [...response.data.slice(0, length)];
      // remove undesired repos
      // - moviesstore (example)
      // - personal site repo (santhoshnalla1.github.io) per user preference
      repoList = repoList.filter(
        (r) =>
          r &&
          r.name &&
          r.name.toLowerCase() !== "moviesstore" &&
          r.name.toLowerCase() !== "santhoshnalla1.github.io"
      );
      // NOTE: Previously we promoted the personal site repo to the front; keeping this
      // commented out so it can be re-enabled later if desired.
      // const personalRepo = response.data.find(
      //   (r) => r && r.name && r.name.toLowerCase() === "santhoshnalla1.github.io"
      // );
      // if (personalRepo) {
      //   repoList = repoList.filter(
      //     (r) => r && r.name && r.name.toLowerCase() !== "santhoshnalla1.github.io"
      //   );
      //   repoList.unshift(personalRepo);
      // }
      // adding specified repos
      try {
        for (let repoName of specfic) {
          const response = await axios.get(`${specficReposAPI}/${repoName}`);
          repoList.push(response.data);
        }
      } catch (error) {
        console.error(error.message);
      }
      // setting projectArray
      // TODO: remove the duplication.
      setProjectsArray(repoList);
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI, length, specfic, specficReposAPI]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <div className="masonry">
          {/* Render custom (private/group) projects first */}
          {customProjects && customProjects.length > 0 && customProjects.map((project, index) => (
            <ProjectCard
              key={`custom-project-${index}`}
              id={`custom-project-${index}`}
              value={{
                name: project.title,
                role: project.role || null,
                description: project.description + (project.note ? `\n${project.note}` : ""),
                svn_url: project.demo || null,
                stargazers_count: null,
                languages_url: null,
                pushed_at: null,
                custom: true,
                raw: project,
              }}
              isMasonry
            />
          ))}
          {/* Then render public GitHub projects as before */}
          {projectsArray.length
            ? projectsArray.map((project, index) => (
              <ProjectCard
                key={`project-card-${index}`}
                id={`project-card-${index}`}
                value={project}
                isMasonry
              />
            ))
            : dummyProjectsArr.map((project, index) => (
              <ProjectCard
                key={`dummy-${index}`}
                id={`dummy-${index}`}
                value={project}
                isMasonry
              />
            ))}
        </div>
      </Container>
    </Jumbotron>
  );
};

export default Project;
