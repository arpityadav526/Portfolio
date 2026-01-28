function Skills({ skills }) {
  return (
    <div className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skillGroup, index) => (
          <div key={index} className="skill-card">
            <p className="heading">{skillGroup.category}</p>
            <div className="skill-list">
              {skillGroup.items.map((skill, idx) => (
                <p key={idx} className="skill-item">{skill}</p>
              ))}
            </div>
            <p className="skill-count">{skillGroup.items.length} Skills</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills