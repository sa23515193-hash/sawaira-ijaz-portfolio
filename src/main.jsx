import { StrictMode, useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const WHATSAPP = '923170763598';
const EMAIL = 'sa23515193@gmail.com';
const GITHUB = 'https://github.com/sa23515193-hash';
const LINKEDIN = 'https://linkedin.com/in/sawaira-ijaz-2a8503385';

const skills = {
  Development: ['HTML5','CSS3','JavaScript','React.js','Vite','Node.js','Express.js','MongoDB','PostgreSQL','REST APIs','PHP','Laravel','Bootstrap','Tailwind CSS','TypeScript','Git & GitHub'],
  DataAI: ['Data Analytics','Data Science','Artificial Intelligence','Machine Learning','Computer Vision','Image Processing','Statistics','Python'],
  Professional: ['Communication','Project Management','Leadership','Teamwork','Time Management','Problem Solving','Fast Learner','Technical Writing','Client Communication','Creative Thinking'],
  Creative: ['Graphic Design','UI/UX Design','Digital Marketing','Branding','Content Writing','Documentation','Microsoft 365']
};

const projects = [
  {
    title: 'Velour Vongue — E-Commerce Platform',
    type: 'Full Stack',
    image: '/images/wp.png',
    desc: 'A full-stack commerce platform built around product discovery, authentication, cart, orders, inventory and an admin-ready architecture.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Stripe'],
    link: '#',
    github: '#'
  },

  {
    title: 'Personal Growth Tracker',
    type: 'MERN Application',
    image: '/images/personal-growth.png',
    desc: 'A personal productivity and growth platform with authentication, dashboard, profile management, progress tracking and feedback features.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    link: 'https://sa23515193-hash.github.io/personal-growth-frontend/',
    github: '#'
  },

  {
    title: 'Al-Matiri Fiber Glass',
    type: 'Business Website',
    image: '/images/fiberglass.png',
    desc: 'A branded business presence for fiberglass products and services, designed to present products clearly and make customer contact simple.',
    tech: ['React', 'Responsive UI', 'Business UX', 'WhatsApp'],
    link: '#',
    github: '#'
  },

  {
    title: 'Car Showroom',
    type: 'Frontend Project',
    image: '/images/car-showroom.png',
    desc: 'A modern automotive showcase concept featuring premium vehicle presentation, responsive layouts and reusable UI components.',
    tech: ['React', 'TypeScript', 'Tailwind', 'React Router'],
    link: '#',
    github: '#'
  },

  {
    title: 'CV & Personal Brand Website',
    type: 'Portfolio',
    image: '/images/cv-portfolio.png',
    desc: 'A personal digital identity combining development, design, research interests, professional experience and career goals.',
    tech: ['React', 'Vite', 'CSS', 'Responsive Design'],
    link: '#',
    github: '#'
  },

  {
    title: 'Birthday Experience Website',
    type: 'Creative Web Project',
    image: '/images/birthday-website.png',
    desc: 'An interactive celebration experience with personalized content, animated stages, countdown, gift reveal and responsive design.',
    tech: ['React', 'TypeScript', 'Animations', 'CSS'],
    link: '#',
    github: '#'
  }
];

const experiences = [
  {role:'Self-Employed Web Developer & Freelancer', date:'2023 — Present', text:'Hands-on work across personal, university and freelance web projects, including responsive interfaces, full-stack applications, business websites, documentation and digital solutions.'},
  {role:'Full Stack JavaScript — ZeroIntern Track', date:'Project-based', text:'Practical full-stack development using React, Node.js, Express and database integration, with NovaCart as a major e-commerce project.'},
  {role:'Advanced Web Development — NAVTTC', date:'3-Month Training', text:'Practical training in HTML, CSS, Bootstrap, JavaScript, jQuery, AJAX, PHP and Laravel.'},
  {role:'AI / Technical Content & Research-Oriented Work', date:'Project & internship experience', text:'Research-based technical writing, documentation and communicating technology concepts in a clear, accessible way.'},
  {role:'Teaching & Communication Experience', date:'3+ Years', text:'Teaching and tutoring experience strengthened communication, presentation, patience, organization and leadership skills.'}
];

const interests = [
  ['MERN & Full Stack','Building modern, responsive and useful web applications.'],
  ['Artificial Intelligence','Exploring AI, machine learning and intelligent software solutions.'],
  ['Data Science & Analytics','Turning data into insights through analysis and visualization.'],
  ['Marketing','Digital presence, branding, audience communication and growth.'],
  ['Management & Leadership','Organizing work, coordinating people and delivering projects.'],
  ['Content Writing','Technical, research-based and professional content creation.']
];

function App(){
  const [menu,setMenu]=useState(false); const [active,setActive]=useState('home');
  const [tab,setTab]=useState('Development');
  useEffect(()=>{const ids=['home','about','skills','experience','projects','interests','contact']; const obs=new IntersectionObserver(es=>{const hit=es.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0]; if(hit) setActive(hit.target.id)}, {rootMargin:'-35% 0px -55% 0px'}); ids.forEach(id=>{const el=document.getElementById(id); if(el) obs.observe(el)}); return()=>obs.disconnect()},[]);
  const wa=`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hello Sawaira, I found your portfolio and would like to discuss a project/opportunity.')}`;
  const nav=['home','about','skills','experience','projects','interests','contact'];
  const scrollTo=id=>{document.getElementById(id)?.scrollIntoView({behavior:'smooth'});setMenu(false)};
  const year=new Date().getFullYear();
  return <div className="app">
    <div className="noise"/>
    <header className="navbar"><div className="nav-inner"><button className="brand" onClick={()=>scrollTo('home')}><span className="brand-mark">S</span><span>Sawaira Ijaz</span></button><button className="menu-btn" onClick={()=>setMenu(!menu)} aria-label="Toggle menu">☰</button><nav className={menu?'nav-links open':'nav-links'}>{nav.map(n=><button key={n} className={active===n?'active':''} onClick={()=>scrollTo(n)}>{n==='home'?'Home':n[0].toUpperCase()+n.slice(1)}</button>)}<a className="nav-cv" href="/Sawaira-Ijaz-CV.pdf" download>Download CV</a></nav></div></header>

    <main>
      <section id="home" className="hero section"><div className="hero-copy"><div className="eyebrow"><span/> COMPUTER SCIENCE • DEVELOPMENT • AI</div><h1>Turning ideas into <em>digital impact.</em></h1><p className="hero-lead">I’m <strong>Sawaira Ijaz</strong> — a Computer Science student, Full Stack Web Developer, creative problem solver and lifelong learner building meaningful digital experiences.</p><div className="hero-actions"><button className="btn primary" onClick={()=>scrollTo('projects')}>Explore My Work <span>↗</span></button><a className="btn ghost" href="/Sawaira-Ijaz-CV.pdf" download>Download CV ↓</a></div><div className="availability"><span className="pulse"/> Open to freelance projects • remote opportunities • internships & collaborations</div></div><div className="hero-visual"><div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="profile-card"><div className="profile-avatar">
  <img src="/images/profile.jpeg" alt="Sawaira Ijaz" />
</div><div className="profile-name">Sawaira Ijaz</div><div className="profile-role">Full Stack Developer</div><div className="mini-line"><span>React</span><span>Node</span><span>AI</span></div></div><div className="float-card f1">✦ MERN Stack</div><div className="float-card f2">◈ Data & AI</div><div className="float-card f3">↗ Creative Mind</div></div></section>

      <section id="about" className="section"><div className="section-head"><span>01 / ABOUT</span><h2>A developer with a <em>builder's mindset.</em></h2></div><div className="about-grid"><div className="about-text"><p>I’m a BS Computer Science student at the University of Gujrat with a strong interest in modern web development, artificial intelligence, data and digital business.</p><p>My learning is driven by practical work: personal products, university projects, freelance-style work and continuous experimentation with new technologies. I enjoy taking an idea from a rough concept to a polished, usable experience.</p><p>Alongside technology, I value communication, management, leadership and content writing — skills that help me understand people and projects, not just code.</p><div className="quote">“Learn continuously. Build intentionally. Communicate clearly.”</div></div><div className="stat-grid"><Stat n="3+" t="Years hands-on web development"/><Stat n="BSCS" t="Computer Science"/><Stat n="6+" t="Professional learning experiences"/><Stat n="∞" t="Curiosity to keep learning"/></div></div></section>

      <section id="skills" className="section dark-panel"><div className="section-head"><span>02 / SKILLS</span><h2>Tools, technology & <em>human skills.</em></h2></div><div className="skill-tabs">{Object.keys(skills).map(k=><button key={k} className={tab===k?'selected':''} onClick={()=>setTab(k)}>{k==='DataAI'?'Data & AI':k}</button>)}</div><div className="skill-cloud">{skills[tab].map((s,i)=><div className="skill-pill" key={s} style={{'--i':i}}><span>✦</span>{s}</div>)}</div></section>

      <section id="experience" className="section"><div className="section-head"><span>03 / EXPERIENCE</span><h2>Experience built through <em>real work.</em></h2></div><div className="timeline">{experiences.map((x,i)=><article className="timeline-item" key={x.role}><div className="timeline-dot">0{i+1}</div><div><div className="timeline-top"><h3>{x.role}</h3><span>{x.date}</span></div><p>{x.text}</p></div></article>)}</div></section>

      <section id="projects" className="section projects">
  <div className="section-head">
    <span>04 / SELECTED WORK</span>

    <h2>
      Projects that turn <em>learning into proof.</em>
    </h2>
  </div>

  <div className="project-grid">
    {projects.map((p, i) => (
      <article className="project-card" key={p.title}>

        {/* PROJECT IMAGE */}
        <div className="project-art">
          <span className="project-no">
            0{i + 1}
          </span>

          <div className="project-image-box">
            <img
              src={p.image}
              alt={`${p.title} project screenshot`}
              className="project-image"
            />
          </div>
        </div>

        {/* PROJECT INFORMATION */}
        <div className="project-body">

          <span className="project-type">
            {p.type}
          </span>

          <h3>{p.title}</h3>

          <p>{p.desc}</p>

          {/* TECHNOLOGIES */}
          <div className="tags">
            {p.tech.map((t) => (
              <span key={t}>
                {t}
              </span>
            ))}
          </div>

          {/* PROJECT LINKS */}
          <div className="project-links">

            {p.link === "#" ? (
              <button disabled>
                Live Demo — Coming Soon
              </button>
            ) : (
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
              >
                View Project ↗
              </a>
            )}

            {p.github === "#" ? (
              <button disabled>
                GitHub — Coming Soon
              </button>
            ) : (
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            )}

          </div>
        </div>

      </article>
    ))}
  </div>
</section>

      <section id="interests" className="section interests"><div className="section-head"><span>05 / CAREER FOCUS</span><h2>Where curiosity meets <em>career direction.</em></h2></div><p className="section-intro">My professional interests combine technology, creativity, business and analytical thinking. I’m building a career that can grow across these areas rather than being limited to one title.</p><div className="interest-grid">{interests.map(([a,b],i)=><article key={a}><div className="interest-index">0{i+1}</div><h3>{a}</h3><p>{b}</p><span className="arrow">↗</span></article>)}</div></section>

      <section className="section education"><div className="edu-card"><div><span className="section-label">EDUCATION</span><h2>BS Computer Science</h2><h3>University of Gujrat</h3><p>Currently continuing my Computer Science degree with practical focus on software development, databases, algorithms, AI concepts and modern web technologies.</p></div><div className="edu-meta"><strong>6th Semester+</strong><span>Undergraduate</span><strong>3.34 / 4.00</strong><span>Current CGPA</span></div></div></section>

      <section id="contact" className="section contact"><div className="contact-card"><div><span className="section-label">06 / CONTACT</span><h2>Have an idea?<br/><em>Let’s build it.</em></h2><p>For freelance work, web development, collaboration, internships, content or technology-related opportunities, feel free to reach out.</p></div><div className="contact-actions"><a className="contact-btn whatsapp" href={wa} target="_blank" rel="noreferrer"><span>◉</span> WhatsApp Me</a><a className="contact-btn" href={`mailto:${EMAIL}?subject=Portfolio%20Opportunity`}><span>✉</span> Email Me</a><a className="contact-btn" href={LINKEDIN} target="_blank" rel="noreferrer"><span>in</span> LinkedIn</a><a className="contact-btn" href={GITHUB} target="_blank" rel="noreferrer"><span>⌘</span> GitHub</a></div></div></section>
    </main>
    <a className="floating-wa" href={wa} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">◉<span>WhatsApp</span></a>
    <footer><div><strong>Sawaira Ijaz</strong><span>Full Stack Developer • Designer • Learner</span></div><div>© {year} Sawaira Ijaz. All rights reserved.</div><button onClick={()=>scrollTo('home')}>Back to top ↑</button></footer>
  </div>
}
function Stat({n,t}){return <div className="stat"><strong>{n}</strong><span>{t}</span></div>}

createRoot(document.getElementById('root')).render(<StrictMode><App/></StrictMode>);
