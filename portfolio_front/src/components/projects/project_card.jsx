function ProjectCard({ project }) {
  return (
    <div 
      className="magic-card" 
      style={{ '--background': project.gradient || 'linear-gradient(to left, #f7ba2b 0%, #ea5358 100%)' }}
    >
      <div className="card-info">
        <div className="card-content">
          <div className="project-image-placeholder">
            <img src={project.image} alt={project.title} />
          </div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="technologies">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
          <div className="project-links">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard