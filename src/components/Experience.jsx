import { motion } from 'framer-motion'

const roles = [
  {
    company: "Capgemini",
    role: "Frontend Developer",
    period: "2022 — Present",
    points: [
      "Collaborated with UX and backend teams to develop cloud-based interfaces using ReactJS, improving delivery efficiency and usability.",
      "Improved performance with bundle splitting & memoization.",
      "Built modular components for dashboards, routing, and user settings with reusable logic using React Hooks.",
      "Optimized frontend scripts and validation logic, leading to a 40% improvement in UI performance.",
      "Integrated external data via REST APIs, ensuring performance and efficiency in collaboration with the system software developers.",
    ],
  },
  {
    company: "Capgemini",
    role: "SAP Basis Administrator",
    period: "2021 — 2022",
    points: [
      "Automated daily backup and recovery processes, reducing manual efforts and enhancing system reliability.",
      "Reduced system downtime through proactive monitoring and performance optimization. Tuned SAP databases,leading to improved memory management and reduced downtime by 30%.",
    ],
  },
];

export default function Experience(){
  return (
    <section className="section" id="experience">
      <div className="container">
        <motion.h2 className="section-title" initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} transition={{duration:.5}} viewport={{once:true}}>Experience</motion.h2>
        <div className="grid">
          {roles.map(r => (
            <motion.div key={r.company} className="card" initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} transition={{duration:.4}} viewport={{once:true}}>
              <div className='experince-box-role-heading'>
                <h3 style={{margin:0}}>{r.role} · {r.company}</h3>
                <span className="badge">{r.period}</span>
              </div>
              <ul>
                {r.points.map(pt => <li key={pt} style={{color:'var(--muted)'}}>{pt}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
