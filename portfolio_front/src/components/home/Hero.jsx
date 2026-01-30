import { useState } from 'react'

function Hero() {
  const [revealName, setRevealName] = useState(false)
  const [revealRole, setRevealRole] = useState(false)

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm{' '}
          <span 
            className={`reveal-text ${revealName ? 'revealed' : ''}`}
            onMouseEnter={() => setRevealName(true)}
            onMouseLeave={() => setRevealName(false)}
          >
            <span className="placeholder-text">[User's Name]</span>
            <span className="actual-text">Arpit Yadav</span>
          </span>
        </h1>
        <p className="hero-subtitle">
          I'm a{' '}
          <span 
            className={`reveal-text ${revealRole ? 'revealed' : ''}`}
            onMouseEnter={() => setRevealRole(true)}
            onMouseLeave={() => setRevealRole(false)}
          >
            <span className="placeholder-text">[User's Role]</span>
            <span className="actual-text">AI-ML Engineer</span>
          </span>
        </p>
        <p className="hero-description">
          Building amazing digital experiences with code and creativity
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">View My Work</button>
          <button className="btn-secondary">Contact Me</button>
        </div>
      </div>
    </section>
  )
}

export default Hero