// src/data/skills.js
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNginx,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiPostman,
  SiFigma,
  SiPython,
  SiC,
  SiCplusplus,
  SiEjs,
} from "react-icons/si";

export default [
  // Languages
  { skill: "HTML", logo: SiHtml5, color: "#E34F26" },
  { skill: "CSS", logo: SiCss3, color: "#1572B6" },
  { skill: "JavaScript", logo: SiJavascript, color: "#F7DF1E" },
  { skill: "EJS", logo: SiEjs, color: "#B4CA65" },
  { skill: "C", logo: SiC, color: "#A8B9CC" },
  { skill: "C++", logo: SiCplusplus, color: "#00599C" },
  { skill: "Python", logo: SiPython, color: "#3776AB" },

  // Frameworks & Libraries
  { skill: "ReactJS", logo: SiReact, color: "#61DAFB" },
  { skill: "Redux Toolkit", logo: SiRedux, color: "#764ABC" },
  { skill: "TailwindCSS", logo: SiTailwindcss, color: "#06B6D4" },
  { skill: "Node.js", logo: SiNodedotjs, color: "#339933" },
  { skill: "Express.js", logo: SiExpress, color: "#ffffff" },
  { skill: "NGINX", logo: SiNginx, color: "#269539" },
  { skill: "Next.js", logo: SiNextdotjs, color: "#000000" },

  // Databases
  { skill: "MongoDB", logo: SiMongodb, color: "#47A248" },
  { skill: "SQL", logo: SiPostgresql, color: "#336791" }, // using PostgreSQL icon
  { skill: "MySQL", logo: SiMysql, color: "#4479A1" },

  // Tools & Software
  { skill: "Git", logo: SiGit, color: "#F05032" },
  { skill: "Postman", logo: SiPostman, color: "#FF6C37" },
  { skill: "Figma", logo: SiFigma, color: "#F24E1E" },
];
