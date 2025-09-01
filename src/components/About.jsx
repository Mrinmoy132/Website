import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About
        </motion.h2>
        <p className="section-sub">
          Hi I’m Mrinmoy 👋 A passionate Frontend Developer who loves turning
          ideas into interactive and visually appealing web applications. I
          specialize in building modern, responsive, and performance driven user
          interfaces using React, JavaScript (ES6+), and REST APIs. I enjoy
          solving challenging UI problems, optimizing performance, and writing
          clean, reusable code to deliver seamless user experiences.
        </p>
        <div className="grid grid-3">
          {[
            { k: "Experience", v: "4+ years" },
            { k: "Location", v: "India" },
            { k: "Open to", v: "Remote · Hybrid" },
          ].map((s) => (
            <motion.div
              key={s.k}
              className="card"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.06 }}
              viewport={{ once: true }}
            >
              <div className="badge">{s.k}</div>
              <div style={{ fontSize: 22, marginTop: 6 }}>{s.v}</div>
            </motion.div>
          ))}
        </div>
        <div style={{ marginTop: "15px", fontSize: "15px" }}>
          <a
            className="download"
            href="/Mrinmoy_Das.pdf"
            download="Mrinmoy_Das.pdf"
            style={{
              display: "inline-block",
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0))",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              padding: "20px", // py-2 px-4
              borderRadius: "16px", // rounded-md ≈ 6px
              textDecoration: "none",
              color: "inherit",
            }}
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
