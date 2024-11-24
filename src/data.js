import { default as python } from "./assets/icons/python.svg";
import { default as js } from "./assets/icons/js.svg";
import { default as html } from "./assets/icons/html.svg";
import { default as css } from "./assets/icons/css.svg";
import { default as php } from "./assets/icons/php.svg";
import { default as react } from "./assets/icons/react.svg";
import { default as Laravel } from "./assets/icons/laravel-svgrepo-com.svg";
import { default as mui } from "./assets/icons/mui.svg";
import { default as bootstrap } from "./assets/icons/bootstrap.svg";
import { default as figma } from "./assets/icons/figma.svg";
import { default as bash } from "./assets/icons/bash.svg";
import { default as mysql } from "./assets/icons/mysql.svg";
import { default as phpmyadmin } from "./assets/icons/phpmyadmin.svg";
import { default as Github } from "./assets/icons/github-142-svgrepo-com.svg";
import { default as linux } from "./assets/icons/linux.svg";
import { default as Git } from "./assets/icons/git-svgrepo-com.svg";
import { default as Gitlab } from "./assets/icons/gitlab-svgrepo-com.svg";
import { default as xampp } from "./assets/icons/xampp.svg";
import { default as nodejs } from "./assets/icons/nodejs.svg";
import { default as VScode } from "./assets/icons/vscode-fill-svgrepo-com.svg";

const data = {
  languages: [
    { id: 2, alt: "Python", img: python },
    { id: 3, alt: "JavaScript", img: js },
    { id: 4, alt: "HTML5", img: html },
    { id: 5, alt: "CSS3", img: css },
    { id: 6, alt: "PHP", img: php },
  ],
  lib: [
    { id: 10, alt: "React JS", img: react },
    { id: 11, alt: "Laravel", img: Laravel },
    { id: 12, alt: "MUI", img: mui },
    { id: 13, alt: "Bootstrap", img: bootstrap },
  ],
  design: [
    { id: 16, alt: "Figma", img: figma },
  ],
  tools: [
    { id: 18, alt: "Bash", img: bash },
    { id: 19, alt: "MySQL", img: mysql },
    { id: 20, alt: "phpMyAdmin", img: phpmyadmin },
    { id: 21, alt: "VScode", img: VScode },
    { id: 22, alt: "Linux", img: linux },
    { id: 23, alt: "Gitlab", img: Gitlab },
    { id: 24, alt: "Github", img: Github },
    { id: 26, alt: "Git", img: Git },
    { id: 27, alt: "Xampp", img: xampp },
  ],
  project1: [
    { id: 9, alt: "React.js", img: react },
    { id: 10, alt: "JavaScript", img: js },
    { id: 11, alt: "HTML", img: html },
    { id: 12, alt: "CSS", img: css },
    { id: 13, alt: "Github", img: Github },
    { id: 15, alt: "Node.js", img: nodejs },
    { id: 16, alt: "Git", img: Git },
    { id: 17, alt: "Figma", img: figma },
  ],
  project2: [
    { id: 18, alt: "Laravel", img: Laravel },
    { id: 19, alt: "PHP", img: php },
    { id: 20, alt: "MySQL", img: mysql },
    { id: 21, alt: "React.js", img: react },
    { id: 22, alt: "JavaScript", img: js },
    { id: 23, alt: "HTML", img: html },
    { id: 24, alt: "CSS", img: css },
    { id: 25, alt: "GitHub", img: Github },
    { id: 26, alt: "Git", img: Git },
    { id: 27, alt: "Figma", img: figma },
  ],
  project3: [
    { id: 28, alt: "JavaScript", img: js },
    { id: 29, alt: "HTML", img: html },
    { id: 30, alt: "CSS", img: css },
    { id: 31, alt: "GitHub", img: Github },
    { id: 32, alt: "Git", img: Git },
  ],
  card1: [
    { id: 33, alt: "JavaScript", img: js },
    { id: 34, alt: "HTML", img: html },
    { id: 35, alt: "CSS", img: css },
    { id: 36, alt: "Git", img: Git },
    { id: 37, alt: "GitHub", img: Github },
  ],
  card2: [
    { id: 38, alt: "Laravel", img: Laravel },
    { id: 39, alt: "MySQL", img: mysql },
    { id: 40, alt: "HTML", img: html },
    { id: 41, alt: "CSS", img: css },
    { id: 42, alt: "GitHub", img: Github },
    { id: 43, alt: "PHP", img: php },
    { id: 44, alt: "Git", img: Git },
  ],
  card3: [
    { id: 45, alt: "JavaScript", img: js },
    { id: 46, alt: "React", img: react },
    { id: 47, alt: "CSS", img: css },
    { id: 48, alt: "Laravel", img: Laravel },
    { id: 49, alt: "GitHub", img: Github },
    { id: 50, alt: "HTML5", img: html },
    { id: 51, alt: "PHP", img: php },
    { id: 52, alt: "Bootstrap", img: bootstrap },
  ],
  card4: [
    { id: 53, alt: "JavaScript", img: js },
    { id: 54, alt: "PHP", img: php },
    { id: 55, alt: "HTML5", img: html },
    { id: 56, alt: "MySQL", img: mysql },
    { id: 57, alt: "Bootstrap", img: bootstrap },
  ],
};

export const WORK_EXPERIENCE = [
  {
    title: "Diploma in Digital Development option Web Full Stack",
    date: "Octobre 2022 - June 2024",
    responsibilities: [
      "Modern Tools & Practices: Learned database management (MySQL, SQLite), version control (Git, GitHub).",
      "Full Stack Development: Gained expertise in front-end (HTML, CSS, React.js) and back-end (PHP, Laravel) technologies through hands-on projects.",
      "Team Collaboration: Worked in team-based projects, simulating professional environments and enhancing problem-solving skills.",
      "UI/UX Design: Studied design principles using Figma, translating prototypes into responsive web interfaces."
    ]
  },
  {
    title: "Full Stack Developer (Gym Management System)",
    date: "April 2024 - May 2024",
    responsibilities: [
      "Developed a gym management system in Laravel to manage memberships.",
      "Implemented secure admin authentication and real-time dashboards for gym operations.",
      "Optimized MySQL database for fast and reliable access to member records and schedules.",
      "Integrated features to track paying members and allow downloading of a PDF report.",
      "Ensured a seamless user experience across both desktop and mobile platforms."
    ]
  }
];

export default data;
