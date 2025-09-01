import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>© {new Date().getFullYear()} Mrinmoy132 - All rights reserved</div>
        <div className="badge">Built with React + Vite + Framer Motion</div>
      </div>
      <div
        style={{
          textAlign: "center",
          paddingTop: "10px",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <a
          href="https://www.instagram.com/mrinmoy_das132/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaInstagram style={{ fontSize: "20px" }} className="icons" />
        </a>
        <a
          href="https://www.facebook.com/share/16MtXoN5cE/?mibextid=wwXIfr"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaFacebookF style={{ fontSize: "20px" }} className="icons" />
        </a>
        <a
          href="https://x.com/wheelsrotating?s=21&t=dx1Ubf5dkzfEnujUcBy2PA"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaTwitter style={{ fontSize: "20px" }} className="icons" />
        </a>
      </div>
    </footer>
  );
}
