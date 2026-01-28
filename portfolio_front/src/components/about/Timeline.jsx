function Timeline() {
  const experiences = [
    {
      year: "2024",
      title: "Senior Developer",
      company: "Tech Company",
      description: "Leading development of innovative web applications",
      type: "work"
    },
    {
      year: "2023",
      title: "Full Stack Developer",
      company: "Startup Inc",
      description: "Built scalable applications using React and Node.js",
      type: "work"
    },
    {
      year: "2022",
      title: "Bachelor's in Computer Science",
      company: "University Name",
      description: "Graduated with honors, focused on software engineering",
      type: "education"
    },
    {
      year: "2021",
      title: "Junior Developer",
      company: "First Company",
      description: "Started my journey in web development",
      type: "work"
    }
  ]

  return (
    <div className="timeline-section">
      <h2>My Journey</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className={`timeline-item ${exp.type}`}>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <span className="timeline-year">{exp.year}</span>
              <h3>{exp.title}</h3>
              <p className="timeline-company">{exp.company}</p>
              <p className="timeline-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline