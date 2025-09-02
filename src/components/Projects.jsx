import { motion } from 'framer-motion'
import projects from '../data/projects.js'

export default function Projects(){
  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.h2 className="section-title" initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} transition={{duration:.5}} viewport={{once:true}}>Projects</motion.h2>
        <p className="section-sub">Some selected work with live demos and code.</p>
        <div className="grid grid-3">
          {projects.map(p => (
            <motion.article key={p.title} className="card project" whileHover={{y:-4, transition:'all 0.5s'}}>
              <img src={p.image} alt={p.title} />
              <h3 style={{margin:'12px 0 6px'}}>{p.title}</h3>
              <p style={{color:'var(--muted)'}}>{p.description}</p>
              <div style={{display:'flex', gap:10, marginTop:10}}>
                {p.demo && <a className="btn" href={p.demo} target="_blank" rel="noreferrer">Live</a>}
                {p.code && <a className="btn" href={p.code} target="_blank" rel="noreferrer">Code</a>}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
