import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Navbar(){
  const links = [
    { to: 'about', label: 'About' },
    { to: 'skills', label: 'Skills' },
    { to: 'projects', label: 'Projects' },
    { to: 'experience', label: 'Experience' },
    { to: 'contact', label: 'Contact' },
  ]
  return (
    <nav>
      <div className="container nav-inner">
        <div className="logo">
          Mrinmoy<span className="badge"></span>
        </div>
        <div className="nav-links">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              smooth
              offset={-60}
              duration={500}
              style={{ cursor: "pointer" }}
              className="tabs"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://github.com/Mrinmoy132"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/mrinmoy-das132/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="icons" />
          </a>
          <a
            href="https://leetcode.com/u/MRIDAS/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <SiLeetcode className="icons" />
          </a>
        </div>
      </div>
    </nav>
  );
}
