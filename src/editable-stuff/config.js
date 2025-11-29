// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f",
  firstName: "Santhosh",
  middleName: "",
  lastName: "Nalla",
  message: "Computer Engineering @ Georgia Tech",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/santhoshnalla1",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/santhosh-nalla-profile/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/profilepic.jpg"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profilepic.jpg"),
  imageSize: 375,
  message: [
    "Hello, I am an undergraduate student who is passionate about applying my knowledge at the intersection of complex software development and hands-on systems integration.",
  ],
  resume: require("../editable-stuff/resumesanthosh.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "santhoshnalla1", // your GitHub username
  reposLength: 0,
  specificRepos: [],
};
const customProjects = [
  {
    title: "Chip Floorplanning Algorithm Visualizer",
    role: "Solo Project",
    description: "Interactive visualizer for VLSI floorplanning that steps through placement and routing, compares heuristics, and tracks area, wirelength, and overlap metrics.",
    demo: "",
    note: ""
  },
  {
    title: "EcoCAR False Floor",
    role: "Subsystem Design & Integration Engineer",
    description:
      "Lightweight serviceable false floor modeled in Siemens NX and validated with FEA; led shop fabrication and added NVH insulation to meet EcoCAR safety and packaging constraints.",
    demo: "",
    note: ""
  },
  {
    title: "CareerConnect",
    role: "Full-stack/ Development Team",
    description: "Recruiting platform with Job Seeker, Recruiter, and Admin roles, profiles, job posts, candidate search, and application tracking with permissioned workflows.",
    demo: "",
    note: ""
  },
  {
    title: "GTFoodTrucks",
    role: "Full-stack/ Development Team",
    description: "Campus food truck finder where vendors publish schedules/menus and students see live locations, menus, and directions via Google Maps and Calendar.",
    demo: "",
    note: ""
  }
  
];

// PROJECT DETAIL CONTENT
// Add rich content (text + images) for each project by slug (lowercase, spaces -> hyphens)
// Examples below use placeholder text and the sample image in editable-stuff.
const projectDetails = {
  "chip-floorplanning-algorithm-visualizer": {
    tech: ["React", "Python", "Algorithms"],
    links: [],
    video: { src: require("../editable-stuff/cfavRecording.mp4") },
    atAGlance: [
      "5x5 grid with 12 blocks (A–L)",
      "Objective: minimize total HPWL across nets",
      "Simulated Annealing with cooling schedule",
      "Live visualization of placement and cost over time",
      "Tracks and reports best solution found"
    ],
    sections: [
      {
        heading: "What this app does",
        paragraphs: [
          "It’s a live visualizer of a chip floorplanning optimizer. We place 12 logic blocks on a 5x5 grid and try to minimize total wiring cost between connected blocks.",
          "It uses Simulated Annealing, a metaheuristic that explores many layouts, occasionally accepting worse ones to escape local minima.",
          "The visualization shows colored blocks and dashed lines indicating net connections while the cost improves over time."
        ]
      },
      {
        heading: "Key concepts",
        paragraphs: [
          "Grid (5x5): Simplified chip area where each cell can hold at most one block.",
          "Blocks (A–L): Modules that must be placed on the grid (e.g., cores, caches, IP blocks).",
          "Netlist: Which blocks must connect (e.g., n1: [A, B, F]). Each net implies wires between those blocks.",
          "HPWL (Half-Perimeter Wire Length): For a net, take the bounding box around its blocks; HPWL is (width + height). Total cost is the sum across nets. Lower is better.",
          "Simulated Annealing: Starts hot (explores freely), cools down (becomes choosier). Accepts better moves always; accepts worse moves with probability exp(-Δ/T) to avoid getting stuck."
        ]
      },
      {
        heading: "How the algorithm works (step-by-step)",
        paragraphs: [
          "Initialize: Randomly shuffle blocks and empties onto the 5x5 grid.",
          "Evaluate: Compute total HPWL from the current placement.",
          "Propose move: Swap two random grid cells (block↔block, block↔empty, or empty↔empty).",
          "Accept/Reject: If cost improves, accept. If worse, maybe accept based on temperature T.",
          "Cool: Multiply T by ALPHA each outer loop.",
          "Track best: Keep the best layout seen.",
          "Visualize: Every few iterations, update the plot.",
          "Finish: Show the final best placement and cost."
        ]
      },
      {
        heading: "What the UI demonstrates",
        paragraphs: [
          "Colored blocks A–L placed on a grid.",
          "Dashed lines per net radiating from the net’s centroid to its member blocks (helps intuit connection clustering).",
          "Title shows iteration, temperature, current cost, and best cost as they improve."
        ]
      },
      {
        heading: "Why this matters (real-world uses)",
        paragraphs: [
          "Chip design (EDA): Floorplanning is a critical early step; good placements reduce wire length, delay, and power.",
          "Optimization education: Clear, minimal example of simulated annealing with an industry-relevant cost function (HPWL).",
          "Rapid prototyping: Easy to tweak nets, sizes, and parameters to study behavior and trade-offs."
        ]
      },
      {
        heading: "Limitations and extensions",
        paragraphs: [
          "Uniform cells, no block sizes/orientations. Extension: add block sizes, non-overlap constraints, fixed macros, and keep-outs.",
          "Simple neighbor move (random swap). Extension: smarter moves (regional swaps, single-block moves, rip-up-and-place).",
          "HPWL only (no congestion/timing/power). Extension: multi-objective cost with weights, congestion/timing estimators.",
          "Centroid lines visualize nets; not real routing. Extension: Steiner-tree approximations or congestion heatmaps.",
          "Fixed SA schedule. Extension: adaptive cooling, reheating, or hybrid with genetic/tabu search."
        ]
      },
    ]
  },
  "ecocar-false-floor": {
    tech: ["Siemens NX", "Altair Inspire", "CAD"],
    links: [],
    atAGlance: [
      "Validated with FEA before fabrication",
      "Led CAD-to-fabrication handoff and build steps"
    ],
    sections: [
      {
        heading: "Design Overview",
        paragraphs: [
          "Led subsystem design, modeling, and hardware-in-the-loop integration for the EcoCAR vehicle. Responsible for requirements breakdown, component selection, control strategy prototyping in Simulink, and coordinating tests between electrical, mechanical, and software teams. Delivered integration test plans, data-driven performance tuning, and supported final vehicle demonstrations to industry judges."
        ]
      },
      {
        heading: "False Floor FEA Results",
        images: [
          { src: require("../editable-stuff/falsefloorfea.png") }
        ]
      }
    ]
  },
  "careerconnect": {
    tech: ["Django", "Python", "Jira"],
    links: [],
    video: { youtube: "https://www.youtube.com/embed/kToOqDQ2B_8" },
    atAGlance: [
      "3 user roles: Job Seeker, Recruiter, Admin",
      "Features: profiles, job posts, search, applications"
    ],
    sections: [
      {
        heading: "Description",
        paragraphs: [
          "CareerConnect connects job seekers with recruiters through three user types: Job Seekers create profiles with skills and experience, Recruiters post jobs and search candidates, and Administrators manage the platform. The system includes profile management, job posting, application tracking, and search functionality."
        ]
      },
      
    ]
  },
  "gtfoodtrucks": {
    tech: ["Sprint", "Google Maps API", "Django"],
    links: [],
    atAGlance: [
      "Vendors manage daily schedules and menus",
      "Students see live truck locations and get directions"
    ],
    sections: [
      {
        heading: "Description",
        paragraphs: [
          "GtFoodTrucks connects campus food truck vendors and students through two main user types: Vendors and Students, with an Admin role to oversee operations. Vendors can log in to post, edit, and manage their daily schedules, menus, and campus locations using an interactive map. Students can view which food trucks are currently on campus, see their menus, and get directions to their locations. The system integrates Google Maps for navigation and Google Calendar for managing and displaying vendor schedules."
        ]
      },
      {
        heading: "Home Page",
        images: [
          { src: require("../editable-stuff/gtfoodtruckshomepage.png") }
        ]
      },

    ]
  }
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
  img: require("../editable-stuff/profilepic.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
  img: require("../editable-stuff/profilepic.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 85 },
    { name: "Python", value: 90 },
    { name: "C++", value: 80 },
    { name: "JavaScript", value: 85 },
    { name: "React", value: 82 },
    { name: "Node.js", value: 78 },
    { name: "SQL / MySQL", value: 80 },
    { name: "HTML / CSS", value: 84 },
  ],
  softSkills: [
    { name: "Agile / Scrum", value: 85 },
    { name: "Sprint Planning", value: 82 },
    { name: "Code Reviews", value: 84 },
    { name: "Team Collaboration", value: 92 },
    { name: "Communication", value: 88 },
    { name: "Problem Solving", value: 86 },
    { name: "Adaptability", value: 84 },
    { name: "Attention to Detail", value: 82 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
    message:
      "I'm currently looking for Software Engineering opportunities for Summer 2026! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
    email: "santhosh.nalla06@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, customProjects, projectDetails };
