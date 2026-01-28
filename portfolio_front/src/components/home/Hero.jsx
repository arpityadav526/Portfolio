function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">[Your Name]</span>
        </h1>
        <p className="hero-subtitle">
          I'm a <span className="highlight">[Your Role]</span>
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