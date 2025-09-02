
import { motion } from "framer-motion";
import { Link } from "react-scroll";

// Fade-up animation
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      className="section"
      id="hero"
      style={{ position: "relative", overflow: "hidden", display:"flex", justifyContent:'center'}}
    >
      {/* --- Animated Gradient Blobs Background --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
          x: [0, 40, -40, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "-100px",
          left: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(90,140,255,0.25), transparent 70%)",
          zIndex: 0,
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.2, 0.5, 0.2],
          x: [0, -50, 50, 0],
          y: [0, 40, -40, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "-120px",
          right: "-120px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.12), transparent 70%)",
          zIndex: 0,
        }}
      />

      {/* --- Content --- */}
      <div
        className="container hero"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Text Block */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true, amount: 0.6 }}
        >
          <div style={{ fontSize: "20px", color: "var(--muted)" }}>
            Hello, I'm
          </div>
          <motion.h1
            style={{
              fontSize: "42px",
              fontWeight: 700,
              background:
                "linear-gradient(90deg, #5a8cff 0%, #a3bffa 50%, #ffffff 100%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              margin: "12px 0",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            MD, Software Engineer & Problem Solver
          </motion.h1>
          <p
            style={{
              fontSize: "18px",
              color: "var(--muted)",
            }}
          >
            I build fast, delightful web apps with React, JavaScript, and Node.
            Explore my work and journey below.
          </p>
          <div className="herobutton" style={{ display: "flex", gap: 12, marginTop: 24 }}>
            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="projects"
                offset={-60}
                smooth
                duration={500}
                className="btn"
                style={{
                  cursor: "pointer",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  background:
                    "linear-gradient(90deg, #5a8cff, #3b82f6, #2563eb)",
                  color: "#fff",
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                View Projects
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.95 }}>
              <a
                href="#contact"
                className="btn"
                style={{
                  cursor: "pointer",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "inherit",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Right-side Card with Animated Background Behind Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{ marginTop: "40px" }}
        >
          <motion.div
            className="card"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{
              borderRadius: "16px",
              padding: "40px",
              background: "rgba(255,255,255,0.02)",
              backdropFilter: "blur(10px)",
              boxShadow:
                "0 8px 25px rgba(90,140,255,0.2), 0 0 20px rgba(255,255,255,0.1)",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Animated Background Behind Image */}
            <motion.div
              animate={{
                background: [
                  "radial-gradient(circle at 20% 30%, rgba(90,140,25,0.3), transparent 70%)",
                  "radial-gradient(circle at 80% 60%, rgba(255,255,25,0.15), transparent 70%)",
                  "radial-gradient(circle at 50% 50%, rgba(90,140,255,0.25), transparent 70%)",
                ],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 0,
              }}
            />

            {/* Profile Image (Static, Rounded-Square) */}
            <img
              src="/profile.jpg" // replace with your image path
              alt="Profile"
              style={{
                width: "250px",
                height: "250px",
                borderRadius: "10px", // rounded square
                objectFit: "cover",
                margin: "0 auto 16px auto",
                position: "relative",
                zIndex: 1,
                border: "3px solid rgba(255,255,255,0.1)",
                boxShadow:
                  "0 6px 18px rgba(90,140,255,0.25), 0 0 20px rgba(255,255,255,0.1)",
              }}
            />

            <p
              style={{
                color: "var(--muted)",
                marginTop: 12,
                zIndex: 1,
                position: "relative",
                fontSize: "12px",
              }}
            >
              When I’m not coding, you’ll probably find me motovlogging or
              traveling to new places
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
