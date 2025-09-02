import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import skillsData from "../data/skills.js";

export default function Skills() {
  // Generate bubble configs only once
  const bubbles = useMemo(
    () =>
      Array.from({ length: 8 }).map(() => ({
        startX: Math.random() * 80, // vw units
        startY: Math.random() * 60 + 10, // vh units
        scale: Math.random() * 0.4 + 0.8,
      })),
    []
  );

  // Dynamic grid column size based on screen width
  const [gridTemplate, setGridTemplate] = useState(
    "repeat(auto-fit, minmax(150px, 1fr))"
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 400) {
        setGridTemplate("repeat(auto-fit, minmax(100px, 1fr))");
      } else {
        setGridTemplate("repeat(auto-fit, minmax(150px, 1fr))");
      }
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="section"
      id="skills"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Floating bubbles background */}
      {bubbles.map((bubble, i) => (
        <motion.div
          key={i}
          initial={{
            x: `${bubble.startX}vw`,
            y: `${bubble.startY}vh`,
            scale: bubble.scale,
            opacity: 0.22,
          }}
          animate={{
            y: [
              `${bubble.startY}vh`,
              `${bubble.startY - Math.random() * 15}vh`,
              `${bubble.startY - Math.random() * 10}vh`,
              `${bubble.startY}vh`,
            ],
            x: [
              `${bubble.startX}vw`,
              `${bubble.startX + Math.random() * 25 - 12.5}vw`,
              `${bubble.startX - Math.random() * 25 + 12.5}vw`,
              `${bubble.startX}vw`,
            ],
            opacity: [0.22, 0.16, 0.22],
          }}
          transition={{
            duration: Math.random() * 10 + 8,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            width: 180,
            height: 180,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(90,140,255,0.85) 40%, rgba(255,255,255,0.8) 80%)",
            boxShadow: "0 0 30px rgba(90,140,255,0.7)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Foreground content */}
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
        <p className="section-sub">
          Languages, Frameworks, Databases, &amp; Tools I frequently use.
        </p>

        <div
          className="grid"
          style={{
            display: "grid",
            gridTemplateColumns: gridTemplate,
            gap: "20px",
            marginTop: "32px",
          }}
        >
          {skillsData.map((s) => (
            <motion.div
              key={s.skill}
              className="card"
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
                borderRadius: "12px",
                textAlign: "center",
                background: "var(--card)",
              }}
            >
              <s.logo size={40} color={s.color} />
              <span style={{ marginTop: "10px", fontWeight: 600 }}>
                {s.skill}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
