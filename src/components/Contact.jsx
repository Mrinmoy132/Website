import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const formRef = useRef(null);
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // Hook up EmailJS or backend here
    setSent(true);
    setTimeout(() => setSent(false), 3000); // auto-hide after 3s
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        {/* Title */}
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>
        <motion.p
          className="section-sub"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Feel free to reach out for collaborations or job opportunities.
        </motion.p>

        {/* Info Card */}
        <motion.div
          className="card contact-email-linkedin"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div>
            <div style={{ fontSize: "20px", fontWeight: "bold" }}>Email</div>
            <a
              href="mailto:mrinmoy.das2512@gmail.com"
              style={{ fontSize: "14px", color: "var(--accent)" }}
            >
              mrinmoy.das2512@gmail.com
            </a>
          </div>
          <div>
            <div style={{ fontSize: "20px", fontWeight: "bold" }}>LinkedIn</div>
            <a
              href="https://www.linkedin.com/in/mrinmoy-das132/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "14px", color: "var(--accent)" }}
            >
              linkedin.com/in/mrinmoy-das132
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={onSubmit}
          className="card"
          style={{
            display: "grid",
            gap: 16,
            maxWidth: 550,
            padding: "24px",
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Inputs */}
          <motion.input
            required
            name="name"
            placeholder="Name"
            className="form-field"
            whileFocus={{
              scale: 1.02,
              boxShadow: "0 0 12px rgba(90,140,255,0.4)",
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.input
            required
            type="email"
            name="email"
            placeholder="Email"
            className="form-field"
            whileFocus={{
              scale: 1.02,
              boxShadow: "0 0 12px rgba(90,140,255,0.4)",
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.textarea
            required
            name="message"
            placeholder="Message"
            rows="6"
            className="form-field"
            whileFocus={{
              scale: 1.02,
              boxShadow: "0 0 12px rgba(90,140,255,0.4)",
            }}
            transition={{ duration: 0.2 }}
          />

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="btn-form"
            style={{
              padding: "12px",
              borderRadius: "8px",
              fontWeight: 600,
              cursor: "pointer",
              background:
                "linear-gradient(90deg, rgb(0, 0, 0), rgb(41, 63, 97), rgb(54, 54, 54))",
              color: "#fff",
              border: "none",
            }}
            whileHover={{
              scale: 1.01,
              boxShadow: "0 0 5px rgba(90,140,255,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Send
          </motion.button>

          {/* Confirmation Badge */}
          {sent && (
            <motion.div
              className="badge"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                marginTop: 10,
                padding: "8px 12px",
                background: "rgba(90,140,255,0.15)",
                borderRadius: "8px",
                textAlign: "center",
                fontWeight: 500,
                color: "#5a8cff",
              }}
            >
              Message sent!
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
