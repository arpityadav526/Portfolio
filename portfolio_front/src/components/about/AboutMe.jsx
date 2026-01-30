function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-header">
        <div className="profile-section">
          <div className="profile-image">
            <img src="/images/hero/WhatsApp Image 2026-01-30 at 20.34.13.jpeg" alt="Profile" />
          </div>
          <div className="profile-info">
            <h1>About Me</h1>
            <p className="tagline">Full Stack Developer | Problem Solver | Tech Enthusiast</p>
            <a href="/assets/resume.pdf" download className="resume-btn">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <div className="about-content">
        <div className="bio-section">
          <h2>Who I Am</h2>
          <p>
            Hi! I'm a passionate developer who loves building things for the web. 
            I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies, 
            contributing to open source, or learning something new.
          </p>
          <p>
            I believe in writing clean, maintainable code and creating 
            user experiences that make a difference.
          </p>
        </div>

        <div className="fun-facts">
          <h2>Fun Facts</h2>
          <div className="facts-grid">
            <div className="fact-card">
              <span className="fact-icon">☕</span>
              <p>Coffee addict - 4 cups a day keeps the bugs away!</p>
            </div>
            <div className="fact-card">
              <span className="fact-icon">🎮</span>
              <p>Gamer at heart - strategy games are my favorite</p>
            </div>
            <div className="fact-card">
              <span className="fact-icon">📚</span>
              <p>Constantly learning - currently exploring AI/ML</p>
            </div>
            <div className="fact-card">
              <span className="fact-icon">🎵</span>
              <p>Coding playlist on repeat - lo-fi beats all day</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe