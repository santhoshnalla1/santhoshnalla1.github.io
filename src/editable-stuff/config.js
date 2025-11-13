// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Santhosh",
  middleName: "",
  lastName: "Nalla",
  message: "Computer Engineering @ Georgia Tech | Current Subsystem Design and Integration Engineer @ EcoCAR",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/santhoshnalla1",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/santhoshnallaa/",
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
  message:
    "Hi, I'm Santhosh Nalla, a Computer Engineering major at Georgia Tech. I enjoy building practical software projects and designing and modeling engineering projects. This site showcases a selection of my projects and ways to get in touch.",
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
    description: "Work in progress",
    demo: "",
    note: ""
  },
  {
    title: "EcoCAR False Floor",
    role: "Subsystem Design & Integration Engineer",
    description:
      "I designed and modeled a custom false floor using Siemens NX and then validated its structural integrity using Finite Element Analysis (FEA). I also led the hands-on fabrication of the floor and designed sound insulation panels to address vehicle noise and vibration.",
    demo: "",
    note: ""
  },
  {
    title: "CareerConnect",
    role: "Development Team",
    description: "This website allows recruiters to connect with job seekers and vice versa based on their skills and experience.",
    demo: "",
    note: ""
  },
  {
    title: "GTFoodTrucks",
    role: "Development Team",
    description: "This app allows people to view which food truck vendors are coming to the GT campus today and where they'll be.",
    demo: "",
    note: ""
  }
  
];

// PROJECT DETAIL CONTENT
// Add rich content (text + images) for each project by slug (lowercase, spaces -> hyphens)
// Examples below use placeholder text and the sample image in editable-stuff.
const projectDetails = {
  "chip-floorplanning-algorithm-visualizer": {
    sections: [
      {
        heading: "Highlights",
        paragraphs: [
          "Add an overview and results for this project.",
          "Mention the algorithms and data structures used"
        ]
      },
      {
        heading: "Gallery",
        images: [
          
        ]
      }
    ]
  },
  "ecocar-false-floor": {
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
    sections: [
      {
        heading: "Description",
        paragraphs: [
          "CareerConnect connects job seekers with recruiters through three user types: Job Seekers create profiles with skills and experience, Recruiters post jobs and search candidates, and Administrators manage the platform. The system includes profile management, job posting, application tracking, and search functionality."
        ]
      },
      {
        heading: "Home Page",
        images: [
          { src: require("../editable-stuff/carconhomepage.png") }
        ]
      },
      {
        heading: "Video Demo",
        images: [
          { src: require("../editable-stuff/carconhomepage.png") }
        ]
      }
    ]
  },
  "gtfoodtrucks": {
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
      {
        heading: "Video Demo",
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
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Systems Engineering", value: 88 },
    { name: "MATLAB/Simulink", value: 86 },
    { name: "Embedded C/C++", value: 80 },
    { name: "Hardware Integration", value: 82 },
    { name: "Control Systems", value: 80 },
    { name: "Python", value: 90 },
    { name: "Data Analysis", value: 78 },
    { name: "CAN / Vehicle Networks", value: 72 },
  ],
  softSkills: [
    { name: "Team Collaboration", value: 92 },
    { name: "Communication", value: 88 },
    { name: "Leadership", value: 80 },
    { name: "Problem Solving", value: 86 },
    { name: "Adaptability", value: 84 },
    { name: "Project Management", value: 78 },
    { name: "Attention to Detail", value: 82 },
    { name: "Creativity", value: 80 },
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
