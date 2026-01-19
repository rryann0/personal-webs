export type Project = {
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  links: { live: string; code: string };
  category: "web" | "creative" | "learning";
};

export const projects: Project[] = [
  {
    title: "Hygieia",
    description: "An app developed in partnership with my school to help keep restrooms tidy.",
    fullDescription: "Built using a React/Express.js frontend and SQLite/Nginx backend (and deployed on an Ubuntu VM), Hygieia is a restroom logging application used by custodians and deans to log which restrooms were last checked and to file/resolve incident reports. It is in contention for the California State Seal of Civic Engagement, and we are developing plans to expand across the entire school district.",
    tags: ["React", "Express.js", "SQLite", "Nginx", "HTML/CSS/JS"],
    links: { live: "https://rryann0.github.io/south-hygieia/", code: "https://github.com/rryann0/south-hygieia/tree/main" },
    category: "web",
  },
  {
    title: "GPA Calculator",
    description: "Weighted GPA and graduation tracker used by my school.",
    fullDescription: "This calculator, featured on the school website, is used to calculate GPA and graduation requirements specific to my school.",
    tags: ["HTML/CSS/JS"],
    links: { live: "https://rryann0.github.io/south-acad-calc/", code: "https://github.com/rryann0/south-acad-calc" },
    category: "web",
  },
  {
    title: "FRC Torbots",
    description: "Code for robots used by my robotics team, Torbots.",
    fullDescription: "Torbots robots run on Java code, making heavy use of Swerve templates and WPILib commands. Check out our robot videos and repositories!",
    tags: ["WPILib", "Java"],
    links: { live: "https://www.youtube.com/channel/UCmZWkggw74qBgBHtaNnz-tg", code: "https://github.com/FRC-Team-1197-Torbots" },
    category: "learning",
  },
  {
    title: "Bloch Sphere Simulator",
    description: "Interactive website simulating a Bloch Sphere.",
    fullDescription: "Built using a 3D A-Frame structure, this website allows learners to physically visualize a Bloch Sphere and transformations done to it using quantum gates.",
    tags: ["A-Frame", "HTML/CSS/JS"],
    links: { live: "https://rryann0.github.io/bloch-sphere-sim/", code: "https://github.com/rryann0/bloch-sphere-sim" },
    category: "learning",
  },
  {
    title: "QSound",
    description: "A website to generate your own quantum music.",
    fullDescription: "Built primarily off Qiskit and MIDI packages, this Flask app alows you to customize and randomize your compositions.",
    tags: ["HTML/CSS/JS", "Qiskit", "Flask"],
    links: { live: "https://qsound.onrender.com/", code: "https://github.com/rryann0/qsound" },
    category: "creative",
  },
];

